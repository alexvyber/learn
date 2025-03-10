import { type default as Email } from './Email';
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
