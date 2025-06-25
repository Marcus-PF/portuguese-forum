/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @ptforum/contracts – Event Schema             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas and DTOs for events within the PFSA platform.
 * Events include community meetings, festivals, and more.
 */

import { z } from 'zod';
import type { EventId, UserId } from '@ptforum/types';
import { uuidBrand } from '../shared/branded-helpers';

/* ─────────────────────────────────────────────────────────────
 * 📅 Event Schema
 * ───────────────────────────────────────────────────────────── */
export const EventSchema = z.object({
  id: uuidBrand<EventId>().describe('Event ID'),
  title: z.string().min(5).max(200).describe('Event title'),
  description: z.string().min(10).optional().describe('Event description'),
  startDate: z.coerce.date().describe('Event start date'),
  endDate: z.coerce.date().describe('Event end date'),
  location: z.string().min(5).describe('Event location'),
  hostId: uuidBrand<UserId>().describe('Host user ID'),
  createdAt: z.coerce.date().describe('Creation timestamp'),
  updatedAt: z.coerce.date().describe('Update timestamp'),
});

/* ─────────────────────────────────────────────────────────────
 * ✍️ DTOs
 * ───────────────────────────────────────────────────────────── */
export const CreateEventDTOSchema = z.object({
  title: z.string().min(5).max(200).describe('Event title'),
  description: z.string().min(10).optional().describe('Event description'),
  startDate: z.coerce.date().describe('Event start date'),
  endDate: z.coerce.date().describe('Event end date'),
  location: z.string().min(5).describe('Event location'),
  hostId: uuidBrand<UserId>().describe('Host user ID'),
});

export const UpdateEventDTOSchema = CreateEventDTOSchema
  .partial()
  .describe('Partial event update');

/* ─────────────────────────────────────────────────────────────
 * 🧩 Inferred Types
 * ───────────────────────────────────────────────────────────── */
export type Event = z.infer<typeof EventSchema>;
export type CreateEventDTO = z.infer<typeof CreateEventDTOSchema>;
export type UpdateEventDTO = z.infer<typeof UpdateEventDTOSchema>;
