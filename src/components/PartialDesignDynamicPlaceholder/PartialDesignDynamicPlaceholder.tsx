import React, { JSX } from 'react';
import { Placeholder } from '@sitecore-content-sdk/nextjs';
import { DynamicPlaceholderProps } from './PartialDesignDynamicPlaceholder.types';

const PartialDesignDynamicPlaceholder = (props: DynamicPlaceholderProps): JSX.Element => (
  <Placeholder name={props.rendering?.params?.sig || ''} rendering={props.rendering} />
);

export default PartialDesignDynamicPlaceholder;
