import { LayoutServiceData } from '@sitecore-content-sdk/nextjs';

export type SitecoreStylesProps = {
  layoutData: LayoutServiceData;
  enableStyles?: boolean;
  enableThemes?: boolean;
}; 