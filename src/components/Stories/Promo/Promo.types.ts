import { ImageField, Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentWithContextProps } from 'lib/component-props';

export interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

export type PromoProps = ComponentWithContextProps & {
  fields: Fields;
}; 