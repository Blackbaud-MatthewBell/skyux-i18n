import {
  InjectionToken
} from '@angular/core';

import {
  SkyLibResourcesProvider
} from './lib-resources-provider';

export const SKY_LIB_RESOURCES_PROVIDERS = new InjectionToken<SkyLibResourcesProvider>(
  'SKY_LIB_RESOURCES_PROVIDERS'
);
