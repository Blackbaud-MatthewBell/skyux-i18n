import {
  SkyAppLocaleProvider
} from './locale-provider';

describe('Locale provider', () => {
  it('should get locale from browser language', () => {
    const provider = new SkyAppLocaleProvider();
    provider.getLocaleInfo().subscribe((localeInfo) => {
      expect(localeInfo.locale).toEqual('en-US');
    });
  });
});
