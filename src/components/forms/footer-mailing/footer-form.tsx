'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitMailingListForm } from '@/components/forms/footer-mailing/form-action';
import { useFormStatus, useFormState } from 'react-dom';
import { FormState } from '@/components/forms/utils';
import { toast } from 'sonner';
import { useEffect } from 'react';

const initState: FormState = {
  message: '',
  field: {},
  issues: [],
  success: false,
};

export const FooterForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(SubmitMailingListForm, initState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg ">Join our newsletter to stay updated!</p>
      <form className="flex items-center gap-2" action={formAction}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <Input
          id="email-address"
          name="email"
          type="email"
          className="w-full px-4 py-2"
          placeholder="Enter your email"
        />
        <Button type="submit" className="px-4 py-2" disabled={pending}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
