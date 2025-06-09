import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

export interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}
