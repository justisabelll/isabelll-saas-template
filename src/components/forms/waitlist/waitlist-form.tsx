'use client';

import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { SubmitWaitlistForm } from '@/components/forms/waitlist/form-action';
import { WaitlistFormSchema } from '@/components/forms/waitlist/form-schema';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

// this also doubles as an example form (type-safe w/ client-side validation)
// server-side validation is handled in the forms-schema.ts

export const WaitlistForm = () => {
  const [state, formAction] = useFormState(SubmitWaitlistForm, {
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof WaitlistFormSchema>>({
    resolver: zodResolver(WaitlistFormSchema),
    defaultValues: {
      name: '',
      email: '',
      ...(state?.field || {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);
    }
  }, [state.message]);

  if (submitted) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold">Thank you for signing up!</p>
        <p className="text-md">We will notify you when we launch.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-6"
        ref={formRef}
        action={formAction}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(e);
        }}
      >
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your name" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div>
            <div>
              {state.message && state.success && (
                <FormMessage className="text-red-500 font-semibold">
                  {state.message}
                </FormMessage>
              )}
            </div>
          </div>
        </div>
        <Button className="w-full py-3" type="submit">
          Join Waiting List
        </Button>
      </form>
    </Form>
  );
};
