import { Webhook } from 'svix';
import 'dotenv/config';
import { db } from '@/lib/db/drizzle';
import { count, eq } from 'drizzle-orm';

import type { WebhookEvent } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json({
      status: 405,
      message: 'Method not allowed',
    });
  }

  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error('CLERK_WEBHOOK_SECRET is not set');
  }

  const svix_id = req.headers.get('svix-id') as string;
  const svix_timestamp = req.headers.get('svix-timestamp') as string;
  const svix_signature = req.headers.get('svix-signature') as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({
      status: 400,
      message: 'Bad request',
    });
  }

  const body = await req.json();
  const bodyString = JSON.stringify(body);

  const webhook = new Webhook(CLERK_WEBHOOK_SECRET);
  let event: WebhookEvent;

  try {
    event = webhook.verify(bodyString, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    return new NextResponse(
      `Webhook Error: ${error instanceof Error ? error.message : error}`,
      { status: 400 }
    );
  }

  const { id } = event.data;
  const eventType = event.type;

  switch (eventType) {
    case 'user.created': {
      // you can add users to your stripe customers table here
      break;
    }
    case 'user.deleted': {
      // you can delete users from your stripe customers table here
      break;
    }
    default: {
      console.error(`The event type: ${eventType} is not configured`);
      break;
    }
  }
  return new NextResponse('Webhook received', { status: 200 });
}
