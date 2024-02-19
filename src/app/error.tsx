"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function ErrorBoundary({
  error,
  retry,
}: {
  error: any;
  retry: any;
}) {
  const [retryTimes, setRetryTimes] = useState(0);

  return (
    <>
      {/* <h1>Error: {error}</h1> */}
      {/* For testing */}
      {/* Retries: {retryTimes} */}
      <div>
        <Button
          color={retryTimes > 1 ? "default" : "warning"}
          radius="full"
          size="sm"
          variant="ghost"
          isDisabled={retryTimes > 1}
          onPress={() => {
            retry();
            // Delete after
            setRetryTimes((prev) => prev + 1);
          }}
        >
          {retryTimes > 1 ? "Try Later" : "Retry"}
        </Button>
      </div>
    </>
  );
}
