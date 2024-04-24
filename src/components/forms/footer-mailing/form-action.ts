'use server';

import { db } from '@/lib/db/drizzle';
import { eq } from 'drizzle-orm';
import { FormState } from '@/components/forms/utils';
import { mailingList } from '@/lib/db/drizzle/schema';
import { MailingListFormSchema } from './form-schema';

export async function SubmitMailingListForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsedData = MailingListFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      message: 'Error: Submission failed.',
      issues: parsedData.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  try {
    const existingEmail = await db
      .select()
      .from(mailingList)
      .where(eq(mailingList.email, parsedData.data.email));

    if (existingEmail.length > 0) {
      return {
        success: false,
        message: 'This email is already on our mailing list.',
      };
    }

    await db.insert(mailingList).values({
      email: parsedData.data.email,
    });

    return {
      success: true,
      message: 'You have been added to our mailing list.',
    };
  } catch (error) {
    return {
      message: 'An error occurred. Please try again later.',
      success: false,
    };
  }
}
