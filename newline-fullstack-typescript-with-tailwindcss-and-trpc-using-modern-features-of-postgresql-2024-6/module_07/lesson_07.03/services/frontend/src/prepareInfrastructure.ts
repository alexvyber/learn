import { parse, Range, serialize } from 'postgres-range';
import SuperJSON from 'superjson';

const prepareInfrastructure = (): void => {
  // Backend <-> Frontend
  SuperJSON.registerCustom<Range<Date>, string>(
    {
      isApplicable: (v): v is Range<Date> => v instanceof Range,
      serialize: (v) => serialize(v, (v) => v.toISOString()),
      deserialize: (v) => parse(v, (v) => new Date(v)),
    },
    'Range<Date>',
  );
};

export default prepareInfrastructure;
