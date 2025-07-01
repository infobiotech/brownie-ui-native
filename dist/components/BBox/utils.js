"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStyleAuto = buildStyleAuto;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildStyleAuto(props) {
    return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(props).filter(([_, v]) => v !== undefined));
}
