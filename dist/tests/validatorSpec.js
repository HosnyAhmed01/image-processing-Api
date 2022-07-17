"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("../modules/validator"));
describe('sholud validate my url', () => {
    it('sholud return true', () => {
        expect((0, validator_1.default)('hoem', '400', '500')).toBeTruthy();
    });
    it('sholud return false', () => {
        expect((0, validator_1.default)('hoem', '40fsa0', '500')).toBeFalse();
    });
});
