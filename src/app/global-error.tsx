'use client';

import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({ error }: { error: any }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html>
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  );
}
