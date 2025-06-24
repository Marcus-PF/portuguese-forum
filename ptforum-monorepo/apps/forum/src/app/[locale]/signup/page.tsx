// apps/forum/app/[locale]/signup/page.tsx

'use client';

import '@ptforum/ui/global.css';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@ptforum/ui';
import { Button } from '@ptforum/ui';
import { Mail, User } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Signup Page – Form Example               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Demo usage of TextField molecule inside a functional
 * form with react-hook-form + zod validation.
 */

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof formSchema>;

export default function SignupPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function onSubmit(values: FormData) {
    console.log('✅ Form submitted:', values);
  }

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Join the Forum</h1>

      {/* ✅ Fix: Add FormProvider wrapper */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <TextField
            name="name"
            label="Full Name"
            placeholder="Bernardo Agostinho"
            icon={<User className="h-4 w-4" />}
            form={form}
          />

          <TextField
            name="email"
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            icon={<Mail className="h-4 w-4" />}
            form={form}
          />

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}