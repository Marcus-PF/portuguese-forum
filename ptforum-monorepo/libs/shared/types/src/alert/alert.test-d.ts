import { expectTypeOf } from 'vitest';
import type { Alert } from './alert';
import type { AlertId } from '../brand';

const a: Alert = {
  id: 'a1' as AlertId,
  message: 'Site maintenance tonight',
  severity: 'INFO',
  createdAt: new Date(),
  updatedAt: new Date(),
};

expectTypeOf(a.severity).toBeString();
