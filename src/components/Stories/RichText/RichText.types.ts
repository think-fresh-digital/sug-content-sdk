import { Field } from '@sitecore-content-sdk/nextjs';
import { ComponentWithContextProps } from 'lib/component-props';

export interface Fields {
  Text: Field<string>;
}

export type RichTextProps = ComponentWithContextProps & {
  fields: Fields;
};
