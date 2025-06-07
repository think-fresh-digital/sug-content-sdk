import { Field } from '@sitecore-content-sdk/nextjs';

export interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
}; 