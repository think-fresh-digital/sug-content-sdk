import Head from 'next/head';
import client from 'lib/sitecore-client';
import { HTMLLink } from '@sitecore-content-sdk/nextjs';
import { SitecoreStylesProps } from './SitecoreStyles.types';

/**
 * Component to render `<link>` elements for Sitecore styles
 */
const SitecoreStyles = ({ layoutData, enableStyles, enableThemes }: SitecoreStylesProps) => {
  const headLinks = client.getHeadLinks(layoutData, { enableStyles, enableThemes });

  if (headLinks.length === 0) {
    return null;
  }

  return (
    <Head>
      {headLinks.map(({ rel, href }: HTMLLink) => (
        <link rel={rel} key={href} href={href} />
      ))}
    </Head>
  );
};

export default SitecoreStyles; 