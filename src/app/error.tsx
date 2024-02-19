"use client";

import { useState } from "react";

export default function ErrorBoundary({
  error,
  retry,
}: {
  error: any;
  retry: any;
}) {
  const [retryTimes, setRetryTimes] = useState(0);

  const btnStyle =
    "border border-slate-300 hover:bg-slate-700 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100";

  return (
    <>
      {/* <h1>Error: {error}</h1> */}
      {/* For testing */}
      {/* Retries: {retryTimes} */}
      <div>
        {retryTimes < 2 ? (
          <>
            <button
              className={btnStyle}
              onClick={() => {
                retry();
                setRetryTimes((prev) => prev + 1);
              }}
            >
              Retry?
            </button>
          </>
        ) : (
          <>Try again later</>
        )}
      </div>
    </>
  );
}
