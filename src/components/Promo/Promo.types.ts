import { ImageField, Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

export interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

export type PromoProps = ComponentProps & {
  fields: Fields;
}; 