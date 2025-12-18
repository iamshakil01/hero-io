import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      {/* Spinner */}
      <span className="loading loading-ring loading-lg text-primary"></span>

      {/* Text */}
      <h2 className="mt-6 text-xl font-semibold tracking-wide">
        Loading...
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        Please wait while we prepare everything for you
      </p>
    </div>
  );
}
