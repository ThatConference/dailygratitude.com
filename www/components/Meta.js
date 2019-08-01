import Head from 'next/head';

const NAME = 'DailyGratitude.com';
const DESCRIPTION = 'Spreading good vibes inside and out.';
const URL = 'https://dailygratitude.com/';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

    <title>{NAME}</title>

    <meta name="description" content={DESCRIPTION} />
    <meta
      name="keywords"
      content="Community, Tech, Engineering, Software, Web"
    />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={NAME} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:url" content={URL} />
    <meta property="og:site_name" content={NAME} />
    <meta property="og:image" content="https://s0.wp.com/i/blank.jpg" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:site" content="@thatconference" />
    <meta name="twitter:title" content={NAME} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content={DESCRIPTION} />
    <meta
      name="twitter:image"
      content="https://www.thatconference.com/images/icons/opengraph.jpg"
    />
  </Head>
);

export default Meta;
