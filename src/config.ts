const config = {
  environment: process.env.NODE_ENV ?? 'development',
  production: process.env.NODE_ENV === 'production',
  site: {
    name: 'Site name',
    description: 'Site description',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
    locale: process.env.DEFAULT_LOCALE,
  },
};

export default config;
