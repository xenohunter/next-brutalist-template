"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

type GlobalErrorProps = {
  error: any;
};

export default function GlobalError({ error }: GlobalErrorProps): JSX.Element {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Internal Website Error" />
      </body>
    </html>
  );
}
