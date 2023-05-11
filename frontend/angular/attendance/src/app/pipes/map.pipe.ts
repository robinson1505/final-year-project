import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapToIterable' })
export class MapToIterable implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (!value || typeof value !== 'object') {
      return [];
    }
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }
}
