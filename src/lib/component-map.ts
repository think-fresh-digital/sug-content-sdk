// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsJssComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as CdpPageView from 'src/components/CdpPageView/CdpPageView';
import * as ColumnSplitter from 'src/components/ColumnSplitter/ColumnSplitter';
import * as Container from 'src/components/Container/Container';
import * as ContentBlock from 'src/components/ContentBlock/ContentBlock';
import * as FEAASScripts from 'src/components/FEAASScripts/FEAASScripts';
import * as Image from 'src/components/Image/Image';
import * as LinkList from 'src/components/LinkList/LinkList';
import * as Navigation from 'src/components/Navigation/Navigation';
import * as PageContent from 'components/Stories/PageContent/PageContent';
import * as PartialDesignDynamicPlaceholder from 'src/components/PartialDesignDynamicPlaceholder/PartialDesignDynamicPlaceholder';
import * as Promo from 'components/Stories/Promo/Promo';
import * as RichText from 'components/Stories/RichText/RichText';
import * as RowSplitter from 'src/components/RowSplitter/RowSplitter';
import * as SitecoreStyles from 'src/components/SitecoreStyles/SitecoreStyles';
import * as Title from 'components/Stories/Title/Title';

// Components must be registered with to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsJssComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['CdpPageView', CdpPageView],
  ['ColumnSplitter', ColumnSplitter],
  ['Container', Container],
  ['ContentBlock', ContentBlock],
  ['FEAASScripts', FEAASScripts],
  ['Image', Image],
  ['LinkList', LinkList],
  ['Navigation', Navigation],
  ['PageContent', PageContent],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Promo', Promo],
  ['RichText', RichText],
  ['RowSplitter', RowSplitter],
  ['SitecoreStyles', SitecoreStyles],
  ['Title', Title],
]);

export default componentMap;
