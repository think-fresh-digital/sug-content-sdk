import {
  ComponentParams,
  ComponentRendering,
  SitecoreContextValue,
} from '@sitecore-content-sdk/nextjs';
import { Pokemon } from 'pokenode-ts';

/**
 * Shared component props
 */
export type ComponentProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
};

/**
 * Component props with context
 * You can access `sitecoreContext` by withSitecoreContext/useSitecoreContext
 * @example withSitecoreContext()(ContentBlock)
 * @example const { sitecoreContext } = useSitecoreContext()
 */
export type ComponentWithContextProps = ComponentProps & {
  sitecoreContext: SitecoreContextValue;
};

export type WithPokemon = {
  pokemon?: Pokemon;
};
