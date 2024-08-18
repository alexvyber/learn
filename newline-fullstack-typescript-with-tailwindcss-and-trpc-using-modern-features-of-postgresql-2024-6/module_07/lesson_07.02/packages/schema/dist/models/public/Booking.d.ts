import { type CustomerId } from './Customer';
import { type ProviderId } from './Provider';
import { z } from 'zod';
/** Identifier type for public.booking */
export type BookingId = number & {
    __brand: 'BookingId';
};
/**
 * Represents the table public.booking
 * Represents a booking made by a given customer, for a given provider. Guaranteed not to overlap with other bookings for said provider.
 */
export default interface Booking {
    id: BookingId;
    customer_id: CustomerId;
    provider_id: ProviderId;
    /** Time of the booking */
    during: string;
}
/**
 * Represents the initializer for the table public.booking
 * Represents a booking made by a given customer, for a given provider. Guaranteed not to overlap with other bookings for said provider.
 */
export interface BookingInitializer {
    id?: BookingId;
    customer_id: CustomerId;
    provider_id: ProviderId;
    /** Time of the booking */
    during: string;
}
/**
 * Represents the mutator for the table public.booking
 * Represents a booking made by a given customer, for a given provider. Guaranteed not to overlap with other bookings for said provider.
 */
export interface BookingMutator {
    id?: BookingId;
    customer_id?: CustomerId;
    provider_id?: ProviderId;
    /** Time of the booking */
    during?: string;
}
export declare const bookingId: z.ZodType<BookingId, z.ZodTypeDef, BookingId>;
export declare const booking: z.ZodType<Booking, z.ZodTypeDef, Booking>;
export declare const bookingInitializer: z.ZodType<BookingInitializer, z.ZodTypeDef, BookingInitializer>;
export declare const bookingMutator: z.ZodType<BookingMutator, z.ZodTypeDef, BookingMutator>;
