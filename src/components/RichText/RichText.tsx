import React, { JSX } from 'react';
import { RichText as JssRichText, GetStaticComponentProps, useComponentProps } from '@sitecore-content-sdk/nextjs';
import { RichTextProps } from './RichText.types';
import { WithPokemon } from 'lib/component-props';
import { Pokemon } from 'pokenode-ts';

export const Default = (props: RichTextProps): JSX.Element => {
  const data = useComponentProps<WithPokemon>(props.rendering.uid);

  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      {data?.pokemon && (
        <div className="component-content">{data.pokemon.name}</div>
      )}
      <div className="component-content">{text}</div>
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (
  _rendering,
  layoutData,
): Promise<WithPokemon> => {

  const pokemon = layoutData.sitecore.context["pokemon"] as Pokemon ?? null;

  return {
    pokemon,
  }
};