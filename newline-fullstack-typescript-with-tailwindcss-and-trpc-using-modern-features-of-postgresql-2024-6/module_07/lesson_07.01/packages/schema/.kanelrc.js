const { knexTypeFilter, generateKnexTablesModule } = require('kanel-knex');
const { generateZodSchemas } = require('kanel-zod');
const { generateIndexFile } = require('kanel');

const knexConfig = require('./knexfile');

const outputPath = './src/models';

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
  },
};
