import {
  NextImage as JssImage,
  Link as JssLink,
  Text,
  useSitecoreContext,
  GetStaticComponentProps,
  useComponentProps,
} from '@sitecore-content-sdk/nextjs';
import React, { CSSProperties, JSX } from 'react';
import { ImageProps } from './Image.types';
import { WithPokemon } from 'lib/component-props';
import { Pokemon } from 'pokenode-ts';

const ImageDefault = (props: ImageProps): JSX.Element => (
  <div className={`component image ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Image</span>
    </div>
  </div>
);

export const Banner = (props: ImageProps): JSX.Element => {
  const data = useComponentProps<WithPokemon>(props.rendering.uid);

  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;
  const backgroundStyle = (props?.fields?.Image?.value?.src && {
    backgroundImage: `url('${props.fields.Image.value.src}')`,
  }) as CSSProperties;
  const classHeroBannerEmpty =
    isPageEditing && props.fields?.Image?.value?.class === 'scEmptyImage'
      ? 'hero-banner-empty'
      : '';
  const modifyImageProps = {
    ...props.fields.Image,
    value: {
      ...props.fields.Image.value,
      style: { width: '100%', height: '100%' },
    },
  };

  const imageContainerStyle: CSSProperties = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const fixedImageStyle: CSSProperties = {
    width: '475px',
    height: '475px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const hasPokemon = Boolean(data?.pokemon?.sprites?.other?.['official-artwork']?.front_default);

  return !hasPokemon ? (
    <div
      className={`component hero-banner ${props.params.styles} ${classHeroBannerEmpty}`}
      id={id ? id : undefined}
    >
      <div className="component-content sc-sxa-image-hero-banner" style={backgroundStyle}>
        {sitecoreContext.pageEditing ? <JssImage field={modifyImageProps} /> : ''}
      </div>
    </div>
  ) : (
    <div
      className={`component hero-banner ${props?.params?.styles} ${classHeroBannerEmpty}`}
      id={id ? id : undefined}
    >
      <div className="component-content" style={hasPokemon ? imageContainerStyle : undefined}>
        {hasPokemon && data?.pokemon?.sprites?.other?.['official-artwork']?.front_default && (
          <img
            src={data.pokemon.sprites.other['official-artwork'].front_default}
            alt={`${data.pokemon.name || 'Pokemon'} artwork`}
            style={fixedImageStyle}
          />
        )}
      </div>
    </div>
  );
};

export const Default = (props: ImageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    const Image = () => <JssImage field={props.fields.Image} />;
    const id = props.params.RenderingIdentifier;

    return (
      <div className={`component image ${props?.params?.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          {sitecoreContext.pageState === 'edit' || !props.fields.TargetUrl?.value?.href ? (
            <Image />
          ) : (
            <JssLink field={props.fields.TargetUrl}>
              <Image />
            </JssLink>
          )}
          <Text
            tag="span"
            className="image-caption field-imagecaption"
            field={props.fields.ImageCaption}
          />
        </div>
      </div>
    );
  }

  return <ImageDefault {...props} />;
};

export const getStaticProps: GetStaticComponentProps = async (
  _rendering,
  layoutData
): Promise<WithPokemon> => {
  const pokemon = (layoutData.sitecore.context['pokemon'] as Pokemon) ?? null;

  return {
    pokemon,
  };
};