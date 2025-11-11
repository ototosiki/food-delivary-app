"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function ErrorPage({ error, reset }: ErrorPageProps) {
    return (
        <>
        <h1>Error</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Reset</button>
        </>
    );
}

export default ErrorPage;
