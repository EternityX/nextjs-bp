'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">
        <a href="https://github.com/EternityX" className="text-violet-600">
          https://github.com/EternityX
        </a>
      </h1>
      <button
        className="rounded bg-red-500 p-2 text-white"
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw test error
      </button>
    </main>
  );
}
