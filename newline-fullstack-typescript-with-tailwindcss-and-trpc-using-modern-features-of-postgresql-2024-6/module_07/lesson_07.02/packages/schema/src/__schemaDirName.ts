// Slight hack to get the schema directory from other packages
// This one is *not* re-exported from index because we don't
// want it to be included in the frontend bundle.
export const __schemaDirname = __dirname;
