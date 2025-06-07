import { JSX } from 'react';
import { RichTextField } from '@sitecore-content-sdk/nextjs';
import { ComponentWithContextProps } from 'lib/component-props';

export interface Fields {
  Content: RichTextField;
}

export type PageContentProps = ComponentWithContextProps & {
  fields: Fields;
};

export type ComponentContentProps = {
  id: string;
  styles: string;
  children: JSX.Element;
}; 