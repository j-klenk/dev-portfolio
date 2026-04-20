import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://joshklenk.xyz';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({
    children,
    title,
    description,
    ogImageUrl,
    twitterCardType,
    twitterTitle,
    twitterSite,
    twitterCreator,
    twitterDomain,
    twitterUrl,
    twitterDescription,
    twitterImageUrl,
  }) => {
    const {asPath: pathname} = useRouter();
    const currentUrl = `${SITE_URL}${pathname}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />

          <link href={currentUrl} key="canonical" rel="canonical" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph */}
          <meta content="website" property="og:type" />
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={currentUrl} property="og:url" />
          {ogImageUrl && <meta content={ogImageUrl} property="og:image" />}
          {ogImageUrl && <meta content="1200" property="og:image:width" />}
          {ogImageUrl && <meta content="630" property="og:image:height" />}
          <meta content="Joshua Klenk Portfolio" property="og:site_name" />

          {/* Twitter */}
          <meta content={twitterCardType ?? 'summary_large_image'} name="twitter:card" />
          <meta content={twitterTitle ?? title} name="twitter:title" />
          <meta content={twitterDescription ?? description} name="twitter:description" />
          {twitterImageUrl && <meta content={twitterImageUrl} name="twitter:image" />}
          {twitterSite && <meta content={twitterSite} name="twitter:site" />}
          {twitterCreator && <meta content={twitterCreator} name="twitter:creator" />}
          {twitterDomain && <meta content={twitterDomain} name="twitter:domain" />}
          {twitterUrl && <meta content={twitterUrl} name="twitter:url" />}
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;