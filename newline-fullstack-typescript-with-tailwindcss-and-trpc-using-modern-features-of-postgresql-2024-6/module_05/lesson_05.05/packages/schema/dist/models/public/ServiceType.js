"use strict";
// @generated
// This file is automatically generated by Kanel. Do not modify manually.
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTypeMutator = exports.serviceTypeInitializer = exports.serviceType = exports.serviceTypeId = void 0;
const zod_1 = require("zod");
exports.serviceTypeId = zod_1.z.number();
exports.serviceType = zod_1.z.object({
    id: exports.serviceTypeId,
    name: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.serviceTypeInitializer = zod_1.z.object({
    id: exports.serviceTypeId.optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.serviceTypeMutator = zod_1.z.object({
    id: exports.serviceTypeId.optional(),
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});