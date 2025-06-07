import { JSX } from 'react';

export interface Fields {
  data: {
    datasource: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          metadata?: { [key: string]: unknown };
        };
      };
    };
    contextItem: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          metadata?: { [key: string]: unknown };
        };
      };
    };
  };
}

export type TitleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export type ComponentContentProps = {
  id: string;
  styles: string;
  children: JSX.Element;
}; 