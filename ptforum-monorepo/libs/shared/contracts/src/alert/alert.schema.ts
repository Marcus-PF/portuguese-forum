/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @ptforum/contracts – Alert Schema              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for system alerts and notifications sent
 * to users. Alerts contain a message, severity, and expiry.
 */

import { z } from 'zod';
import type { AlertId } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 🚨 Core Alert Schema
 * ───────────────────────────────────────────────────────────── */
export const AlertSchema = z.object({
  id: uuidBrand<AlertId>().describe('Alert ID'),
  message: z.string().min(5).describe('Alert message'),
  severity: z
    .enum(['INFO', 'WARNING', 'EMERGENCY'])
    .describe('Alert severity'),
  expiresAt: z.coerce.date().optional().describe('Expiration timestamp'),
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * 📤 DTO Schemas
 * ───────────────────────────────────────────────────────────── */
export const CreateAlertDTOSchema = z.object({
  message: z.string().min(5).describe('Alert message'),
  severity: z
    .enum(['INFO', 'WARNING', 'EMERGENCY'])
    .describe('Alert severity'),
  expiresAt: z.coerce.date().optional().describe('Expiration timestamp'),
});

export const UpdateAlertDTOSchema = CreateAlertDTOSchema.partial().describe(
  'Partial alert update'
);

/* ─────────────────────────────────────────────────────────────
 * 🧩 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Alert = z.infer<typeof AlertSchema>;
export type CreateAlertDTO = z.infer<typeof CreateAlertDTOSchema>;
export type UpdateAlertDTO = z.infer<typeof UpdateAlertDTOSchema>;
