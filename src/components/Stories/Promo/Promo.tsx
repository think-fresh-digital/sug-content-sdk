import React, { JSX } from 'react';
import {
  NextImage as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  GetStaticComponentProps,
  useComponentProps,
} from '@sitecore-content-sdk/nextjs';
import { PromoProps } from './Promo.types';
import { WithPokemon } from 'lib/component-props';
import { Pokemon } from 'pokenode-ts';
import Image from 'next/image';

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const data = useComponentProps<WithPokemon>(props.rendering.uid);

  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props?.params?.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          {!data?.pokemon && (
            <div className="field-promoicon">
              <JssImage field={props.fields.PromoIcon} />
            </div>
          )}
          {data?.pokemon && (
            <div className="field-promoicon">
              <Image
                src={data.pokemon.sprites.other?.dream_world.front_default as string}
                alt="pokemon dream world front default"
                style={{
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
                width={200}
                height={200}
              />
            </div>
          )}
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                {!data?.pokemon && <JssRichText field={props.fields.PromoText} />}
                {data?.pokemon && (
                  <>
                    <h3>Abilities</h3>
                    <ul>
                      {data.pokemon.abilities.map((a) => {
                        return (
                          <li key={a.ability.name}>
                            <strong>{a.ability.name}</strong>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className="field-promolink">
              <JssLink field={props.fields.PromoLink} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props?.params?.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <JssRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <JssRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
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
