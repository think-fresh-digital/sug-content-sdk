import Head from 'next/head';
import { SitecoreContext, ErrorPages, SitecorePageProps } from '@sitecore-content-sdk/nextjs';
import Layout from 'src/Layout';
import { GetStaticProps } from 'next';
import scConfig from 'sitecore.config';
import client from 'lib/sitecore-client';
import components from 'lib/component-map';
import { JSX } from 'react';

/**
 * Rendered in case if we have 500 error
 */
const ServerError = (): JSX.Element => (
  <>
    <Head>
      <title>500: Server Error</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>500 Internal Server Error</h1>
      <p>There is a problem with the resource you are looking for, and it cannot be displayed.</p>
      <a href="/">Go to the Home page</a>
    </div>
  </>
);

const Custom500 = (props: SitecorePageProps): JSX.Element => {
  if (!(props && props.layout)) {
    return <ServerError />;
  }

  return (
    <SitecoreContext api={scConfig.api} componentMap={components} layoutData={props.layout}>
      <Layout layoutData={props.layout} />
    </SitecoreContext>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let resultErrorPages: ErrorPages | null = null;

  if (!scConfig.disableStaticPaths) {
    try {
      resultErrorPages = await client.getErrorPages({
        site: scConfig.defaultSite,
        locale: context.locale || context.defaultLocale || scConfig.defaultLanguage,
      });
    } catch (error) {
      console.log('Error occurred while fetching error pages');
      console.log(error);
    }
  }

  return {
    props: {
      layout: resultErrorPages?.serverErrorPage?.rendered || null,
    },
  };
};

export default Custom500;
