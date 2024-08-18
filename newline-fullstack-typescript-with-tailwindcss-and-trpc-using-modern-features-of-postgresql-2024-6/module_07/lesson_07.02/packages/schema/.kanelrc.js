const { knexTypeFilter, generateKnexTablesModule } = require('kanel-knex');
const {
  makeGenerateZodSchemas,
  defaultGetZodSchemaMetadata,
  defaultGetZodIdentifierMetadata,
  defaultZodTypeMap,
} = require('kanel-zod');
const { generateIndexFile } = require('kanel');

const knexConfig = require('./knexfile');

const outputPath = './src/models';

const generateZodSchemas = makeGenerateZodSchemas({
  getZodSchemaMetadata: defaultGetZodSchemaMetadata,
  getZodIdentifierMetadata: defaultGetZodIdentifierMetadata,
  zodTypeMap: {
    ...defaultZodTypeMap,
    'pg_catalog.tsrange': 'z.custom<Range<Date>>(v => v)',
  },
});

/** @type {import('kanel').Config} */
module.exports = {
  connection: knexConfig.development.connection,

  outputPath,
  preDeleteOutputFolder: true,

  typeFilter: knexTypeFilter,
  preRenderHooks: [
    generateIndexFile,
    generateKnexTablesModule,
    generateZodSchemas,
  ],

  customTypeMap: {
    'public.citext': 'string',
    'pg_catalog.tsrange': {
      name: 'Range<Date>',
      typeImports: [
        {
          name: 'Range',
          path: 'postgres-range',
          isAbsolute: true,
          isDefault: false,
        },
      ],
    },
  },
};
