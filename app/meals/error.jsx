"use client";

export default function Error({ erro }) {
  return (
    <main className="error">
      <h1>An Error occured</h1>
      <p>Failed to fetch meals data. Please reload or try again later.</p>
    </main>
  );
}