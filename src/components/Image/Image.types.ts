import { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'src/lib/component-props';

export interface Fields {
  Image: ImageField & { metadata?: { [key: string]: unknown } };
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
}

export type ImageProps = ComponentProps & {
  fields: Fields;
}