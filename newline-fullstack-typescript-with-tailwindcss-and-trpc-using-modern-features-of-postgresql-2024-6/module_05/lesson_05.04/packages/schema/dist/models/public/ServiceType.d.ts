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