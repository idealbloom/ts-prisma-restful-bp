import { IBError, IBResFormats } from './IBDefinitions';

describe('IBDefinition E2E Test', () => {
  describe('Construction IBError', () => {
    it('Case: INVALIDPARAMS', () => {
      const eType: keyof IBResFormats = 'INVALIDPARAMS';
      const ibError = new IBError(eType);
      expect(ibError.name).toBe('IBError');
      expect(ibError.message).toBe(eType);
    });
  });
});
