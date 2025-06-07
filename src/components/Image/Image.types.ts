import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';

export interface Fields {
  Image: ImageField & { metadata?: { [key: string]: unknown } };
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
}

export type ImageProps = {
  params: { [key: string]: string };
  fields: Fields;
}; 