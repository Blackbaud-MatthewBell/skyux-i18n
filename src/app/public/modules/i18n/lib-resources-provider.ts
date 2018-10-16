import {
  SkyAppLocaleInfo
} from './locale-info';

export interface SkyLibResourcesProvider {

  getString: (localeInfo: SkyAppLocaleInfo, name: string) => string;

}
