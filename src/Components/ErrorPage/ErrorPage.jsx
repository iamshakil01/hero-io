import React from "react";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 text-center">
      <h1 className="text-[10rem] font-extrabold text-primary select-none leading-none">
        404
      </h1>

      <p className="text-xl md:text-2xl max-w-xl mt-6 text-base-content/80">
        Oops! The page you’re looking for doesn’t exist. It might have been
        moved or deleted.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary btn-lg"
          aria-label="Go back home"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-lg"
          aria-label="Go to previous page"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
