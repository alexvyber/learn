import { Knex } from 'knex';
import { type ProviderInitializer, type ProviderMutator, type default as Provider } from './public/Provider';
import { type CustomerInitializer, type CustomerMutator, type default as Customer } from './public/Customer';
import { type ServiceTypeInitializer, type ServiceTypeMutator, type default as ServiceType } from './public/ServiceType';
import { type BookingInitializer, type BookingMutator, type default as Booking } from './public/Booking';
declare module 'knex/types/tables' {
    interface Tables {
        'provider': Knex.CompositeTableType<Provider, ProviderInitializer, ProviderMutator>;
        'customer': Knex.CompositeTableType<Customer, CustomerInitializer, CustomerMutator>;
        'service_type': Knex.CompositeTableType<ServiceType, ServiceTypeInitializer, ServiceTypeMutator>;
        'booking': Knex.CompositeTableType<Booking, BookingInitializer, BookingMutator>;
    }
}
