import { types } from 'pg';
import { parse, Range, serialize } from 'postgres-range';
import SuperJSON from 'superjson';

// Backend <-> Frontend
SuperJSON.registerCustom<Range<Date>, string>(
  {
    isApplicable: (v): v is Range<Date> => v instanceof Range,
    serialize: (v) => serialize(v, (v) => v.toISOString()),
    deserialize: (v) => parse(v, (v) => new Date(v)),
  },
  'Range<Date>',
);

const prepareInfrastructure = (): void => {
  // PostgreSQL -> Backend
  const TSRANGE_OID = 3908;
  types.setTypeParser(TSRANGE_OID as any, (v) => parse(v, (v) => new Date(v)));

  // Backend -> PostgreSQL
  (Range.prototype as any).toPostgres = function (
    prepareValue: (v: Date) => string,
  ): string {
    return serialize(this as Range<Date>, prepareValue);
  };
};

export default prepareInfrastructure;
