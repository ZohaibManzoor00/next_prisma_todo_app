"use client";

export default function ErrorBoundary({ error, retry }: { error: any; retry: any }) {
  return (
    <>
      <h1>{error}</h1>
      <button onClick={retry}>Retry</button>
    </>
  );
}
