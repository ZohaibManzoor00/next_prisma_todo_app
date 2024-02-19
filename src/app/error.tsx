"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function ErrorBoundary({
  error,
  reset: retry,
}: {
  error: Error;
  reset: () => void;
}) {
  const [retryTimes, setRetryTimes] = useState(0);

  return (
    <>
      <div className="text-center">
        {/* <h1 className="text-lg">Error has occurred: {error.message}</h1>
        <h1 className="py-3">Sit tight will we figure this out</h1> */}
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
          {retryTimes === 2 ? "Try Later" : "Retry"}
        </Button>
      </div>
    </>
  );
}

// export default function ErrorBoundary({
//   error,
//   retry,
// }: {
//   error: any;
//   retry: any;
// }) {
//   const [retryTimes, setRetryTimes] = useState(0);

//   return (
//     <>
//       {/* <h1>Error: {error}</h1> */}
//       {/* For testing */}
//       {/* Retries: {retryTimes} */}
//       <div className="flex justify-center items-center gap-4">
//         <h1 className="text-lg">An error has occurred</h1>
//         <Button
//           color={retryTimes > 1 ? "default" : "warning"}
//           radius="full"
//           size="sm"
//           variant="ghost"
//           isDisabled={retryTimes > 1}
//           onPress={() => {
//             retry();
//             // Delete after
//             setRetryTimes((prev) => prev + 1);
//           }}
//         >
//           {retryTimes > 1 ? "Try Later" : "Retry"}
//         </Button>
//       </div>
//     </>
//   );
// }
