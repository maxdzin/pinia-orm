import type { Model } from '../../../Model'
import type { PropertyDecorator } from '../../Contracts'

/**
 * Create a morph-to-many attribute property decorator.
 */
export function MorphedByMany (
  related: () => typeof Model,
  pivot: () => typeof Model,
  relatedId: string,
  id: string,
  type: string,
  parentKey?: string,
  relatedKey?: string,
): PropertyDecorator {
  return (target, propertyKey) => {
    const self = target.$self()

    self.setRegistry(propertyKey, () =>
      self.morphedByMany(related(), pivot(), relatedId, id, type, parentKey, relatedKey),
    )
  }
}
