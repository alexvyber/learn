// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { email, type default as Email } from './Email';
import { z } from 'zod';

/** Identifier type for public.customer */
export type CustomerId = number & { __brand: 'CustomerId' };

/** Represents the table public.customer */
export default interface Customer {
  id: CustomerId;

  name: string;

  email: Email;
}

/** Represents the initializer for the table public.customer */
export interface CustomerInitializer {
  id?: CustomerId;

  name: string;

  email: Email;
}

/** Represents the mutator for the table public.customer */
export interface CustomerMutator {
  id?: CustomerId;

  name?: string;

  email?: Email;
}

export const customerId = z.number() as unknown as z.Schema<CustomerId>;

export const customer = z.object({
  id: customerId,
  name: z.string(),
  email: email,
}) as unknown as z.Schema<Customer>;

export const customerInitializer = z.object({
  id: customerId.optional(),
  name: z.string(),
  email: email,
}) as unknown as z.Schema<CustomerInitializer>;

export const customerMutator = z.object({
  id: customerId.optional(),
  name: z.string().optional(),
  email: email.optional(),
}) as unknown as z.Schema<CustomerMutator>;