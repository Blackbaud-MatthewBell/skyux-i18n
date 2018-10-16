import {
  Injectable, Inject
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  SkyAppFormat
} from '@skyux/core';

import {
  SkyLibResourcesProvider
} from './lib-resources-provider';

import {
  SkyAppLocaleProvider
} from './locale-provider';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from './lib-resources-providers-token';

import {
  SkyAppHostLocaleProvider
} from './host-locale-provider';

@Injectable()
export class SkyLibResourcesService {

  private format = new SkyAppFormat();

  constructor(
    @Inject(SkyAppHostLocaleProvider) private localeProvider: SkyAppLocaleProvider,
    @Inject(SKY_LIB_RESOURCES_PROVIDERS) private providers: SkyLibResourcesProvider[]
  ) { }

  public getString(name: string, ...args: any[]): Observable<string> {
    return this.localeProvider.getLocaleInfo()
      .map(info => {
        for (const provider of this.providers) {
          const s = provider.getString(info, name);

          if (s) {
            return this.format.formatText(s, args);
          }
        }

        return undefined;
      });
  }

}
