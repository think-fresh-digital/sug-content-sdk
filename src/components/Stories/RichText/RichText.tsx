import React, { JSX } from 'react';
import {
  RichText as JssRichText,
  GetStaticComponentProps,
  useComponentProps,
} from '@sitecore-content-sdk/nextjs';
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
      className={`component rich-text ${props?.params?.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      {data?.pokemon && (
        <div className="component-content">
          <h2
            style={{
              color: '#ff6b6b',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'pokemonBounce 1s infinite',
              textTransform: 'capitalize',
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            {data.pokemon.name}
          </h2>
          <style jsx>{`
            @keyframes pokemonBounce {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}</style>
        </div>
      )}
      {!data?.pokemon && <div className="component-content">{text}</div>}
    </div>
  );
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
