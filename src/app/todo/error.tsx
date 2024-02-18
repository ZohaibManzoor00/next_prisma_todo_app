"use client";

export default function Error({ error, retry }: { error: any, retry: any }) {
  console.log(error, retry);
  return "Error";
}
