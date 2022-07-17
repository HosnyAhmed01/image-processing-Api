import validateUrl from '../modules/validator';

describe('sholud validate my url', () => {
    it('sholud return true', () => {
        expect(validateUrl('hoem', '400', '500')).toBeTruthy();
    });
    it('sholud return false', () => {
        expect(validateUrl('hoem', '40fsa0', '500')).toBeFalse();
    });
});
