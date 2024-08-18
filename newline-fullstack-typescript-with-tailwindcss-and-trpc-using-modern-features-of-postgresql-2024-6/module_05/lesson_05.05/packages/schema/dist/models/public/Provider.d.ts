import { type default as Email } from './Email';
import { z } from 'zod';
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
export declare const providerId: z.ZodType<ProviderId, z.ZodTypeDef, ProviderId>;
export declare const provider: z.ZodType<Provider, z.ZodTypeDef, Provider>;
export declare const providerInitializer: z.ZodType<ProviderInitializer, z.ZodTypeDef, ProviderInitializer>;
export declare const providerMutator: z.ZodType<ProviderMutator, z.ZodTypeDef, ProviderMutator>;
