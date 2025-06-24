/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @ptforum/ui – TextField Molecule            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * A composed input field using Label, Input, and
 * FormMessage from ShadCN. Integrates with RHF and Zod.
 * Enhanced with subtle animations and utility-based design
 * inspired by Magic UI components.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Imports
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { Label } from '../../atoms/label';
import { Input } from '../../atoms/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../atoms/form';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { cn } from '@ptforum/utils';

/* ─────────────────────────────────────────────────────────────
 * 🧱 TextField Props
 * ───────────────────────────────────────────────────────────── */
interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
  type?: React.HTMLInputTypeAttribute;
  form: UseFormReturn<T>;
  autoComplete?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
 * 🧩 TextField Component
 * ───────────────────────────────────────────────────────────── */
export function TextField<T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  type = 'text',
  form,
  autoComplete,
  disabled = false,
  icon,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="transition-all duration-200 ease-in-out">
          <Label htmlFor={name} className="block mb-1 text-sm font-medium text-foreground">
            {label}
          </Label>
          <FormControl>
            <div className="relative">
              {icon && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                  {icon}
                </span>
              )}
              <Input
                id={name}
                placeholder={placeholder}
                type={type}
                autoComplete={autoComplete}
                disabled={disabled}
                className={cn(
                  icon && 'pl-10',
                  'peer transition-all duration-150 ease-in-out shadow-sm focus:shadow-md focus:ring-2 focus:ring-primary focus:outline-none'
                )}
                {...field}
              />
            </div>
          </FormControl>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground animate-fade-in">
              {description}
            </p>
          )}
          <FormMessage className="text-destructive mt-1 animate-fade-in" />
        </FormItem>
      )}
    />
  );
}