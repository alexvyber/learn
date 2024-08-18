"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__schemaDirname = void 0;
// Slight hack to get the schema directory from other packages
// This one is *not* re-exported from index because we don't
// want it to be included in the frontend bundle.
exports.__schemaDirname = __dirname;
