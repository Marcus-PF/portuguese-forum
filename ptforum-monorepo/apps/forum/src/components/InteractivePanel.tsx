'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@ptforum/ui';

interface InteractivePanelProps {
  name: string;
}

export function InteractivePanel({ name }: InteractivePanelProps) {
  const showAlert = useCallback((message: string): void => {
    if (typeof window !== 'undefined') {
      window.alert(message);
    }
  }, []);

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-4xl font-semibold">Hello, {name}!</h2>

      <button className='bg-primary text-primary-foreground shadow-xs hover:bg-primary/90'>Normal Button</button>

      <div className="space-x-4 flex flex-wrap justify-center">
        <Button size="sm">Click me</Button>

        <Button variant="secondary" size="sm">
          Click me
        </Button>

        <Button variant="destructive" size="sm">
          Delete
        </Button>

        <Button variant="outline" size="sm">
          Cancel
        </Button>

        {/* Button as link using `asChild` */}
        <Button variant="link" size="sm" asChild>
          <Link href="#" onClick={() => showAlert('Link clicked')}>
            Learn more
          </Link>
        </Button>
      </div>
    </div>
  );
}
