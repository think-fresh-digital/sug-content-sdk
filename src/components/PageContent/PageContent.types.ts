import { JSX } from 'react';
import { RichTextField } from '@sitecore-content-sdk/nextjs';

export interface Fields {
  Content: RichTextField;
}

export type PageContentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export type ComponentContentProps = {
  id: string;
  styles: string;
  children: JSX.Element;
}; 