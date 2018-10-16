import {
  ChangeDetectorRef,
  Pipe,
  PipeTransform
} from '@angular/core';

import {
  SkyLibResourcesService
} from './lib-resources.service';

/**
 * An Angular pipe for displaying a resource string.
 */
@Pipe({
  name: 'skyLibResources',
  pure: false
})
export class SkyLibResourcesPipe implements PipeTransform {
  private resourceCache: {[key: string]: any} = {};

  constructor(
    private changeDetector: ChangeDetectorRef,
    private resourcesSvc: SkyLibResourcesService
  ) { }

  /**
   * Transforms a named resource string into its value.
   * @param name The name of the resource string.
   */
  public transform(name: string, ...args: any[]): string {
    const cacheKey = name + JSON.stringify(args);

    if (!(cacheKey in this.resourceCache)) {
      this.resourcesSvc
        .getString(name, ...args)
        .subscribe((result) => {
          this.resourceCache[cacheKey] = result;
          this.changeDetector.markForCheck();
        });
    }

    return this.resourceCache[cacheKey];
  }
}
