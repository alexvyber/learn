import { z } from 'zod';
/** Identifier type for public.service_type */
export type ServiceTypeId = number & {
    __brand: 'ServiceTypeId';
};
/** Represents the table public.service_type */
export default interface ServiceType {
    id: ServiceTypeId;
    name: string;
    description: string;
}
/** Represents the initializer for the table public.service_type */
export interface ServiceTypeInitializer {
    id?: ServiceTypeId;
    name: string;
    description: string;
}
/** Represents the mutator for the table public.service_type */
export interface ServiceTypeMutator {
    id?: ServiceTypeId;
    name?: string;
    description?: string;
}
export declare const serviceTypeId: z.ZodType<ServiceTypeId, z.ZodTypeDef, ServiceTypeId>;
export declare const serviceType: z.ZodType<ServiceType, z.ZodTypeDef, ServiceType>;
export declare const serviceTypeInitializer: z.ZodType<ServiceTypeInitializer, z.ZodTypeDef, ServiceTypeInitializer>;
export declare const serviceTypeMutator: z.ZodType<ServiceTypeMutator, z.ZodTypeDef, ServiceTypeMutator>;
