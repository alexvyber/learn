import { type default as Email } from './Email';
/** Identifier type for public.provider */
export type ProviderId = number & {
    __brand: 'ProviderId';
};
/** Represents the table public.provider */
export default interface Provider {
    id: ProviderId;
    name: string;
    email: Email;
}
/** Represents the initializer for the table public.provider */
export interface ProviderInitializer {
    id?: ProviderId;
    name: string;
    email: Email;
}
/** Represents the mutator for the table public.provider */
export interface ProviderMutator {
    id?: ProviderId;
    name?: string;
    email?: Email;
}
