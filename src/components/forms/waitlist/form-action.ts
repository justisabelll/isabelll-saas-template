'use server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db/drizzle';
import { waitingList } from '@/lib/db/drizzle/schema';
import { WaitlistFormSchema } from '@/components/forms/waitlist/form-schema';
import { FormState } from '@/components/forms/utils';

export async function SubmitWaitlistForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsedData = WaitlistFormSchema.safeParse(formData);

  if (!parsedData.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: 'Error: Submission failed.',
      field: fields,
      issues: parsedData.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  try {
    const existingEntry = await db
      .select()
      .from(waitingList)
      .where(eq(waitingList.email, parsedData.data.email));

    if (existingEntry.length > 0) {
      return {
        message:
          'That email is already on the waitlist. Thanks for already signing up!',
        success: false,
      };
    }

    await db.insert(waitingList).values({
      name: parsedData.data.name,
      email: parsedData.data.email,
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      message: 'An error occurred. Please try again later.',
      success: false,
    };
  }
}
