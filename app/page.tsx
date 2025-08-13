import { Suspense } from 'react';
import { ClientComponent } from './ClientComponent';

export default function Home() {
  return (
    <main>
      <ClientComponent />

      <Suspense fallback="Fallback">
        <SlowRSC />
      </Suspense>
    </main>
  );
}

async function SlowRSC() {
  await new Promise((resolve) => setTimeout(resolve, 4_000));

  return <p>RSC Content</p>;
}
