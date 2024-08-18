import { type default as Email } from './Email';
import { z } from 'zod';
/** Identifier type for public.customer */
export type CustomerId = number & {
    __brand: 'CustomerId';
};
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
export declare const customerId: z.ZodType<CustomerId, z.ZodTypeDef, CustomerId>;
export declare const customer: z.ZodType<Customer, z.ZodTypeDef, Customer>;
export declare const customerInitializer: z.ZodType<CustomerInitializer, z.ZodTypeDef, CustomerInitializer>;
export declare const customerMutator: z.ZodType<CustomerMutator, z.ZodTypeDef, CustomerMutator>;
