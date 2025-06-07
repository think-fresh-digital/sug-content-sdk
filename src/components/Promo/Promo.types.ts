import { ImageField, Field, LinkField } from '@sitecore-content-sdk/nextjs';

export interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

export type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
}; 