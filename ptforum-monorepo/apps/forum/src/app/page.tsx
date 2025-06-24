import type { User } from '@ptforum/types';
import { InteractivePanel } from '../components/InteractivePanel';

const user: User = {
  id: 'u1',
  name: 'Marcus',
  email: 'marcus@example.com',
  roles: ['admin'],
  isActive: true,
};

export default function HomePage() {
  return (
    <main className="bg-background flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center space-y-6">
      <h1 className="text-primary text-5xl font-bold">Tailwind v4 is up and running!</h1>

      <InteractivePanel name={user.name} />

      <div className="mt-8 p-4 rounded-md bg-muted text-muted-foreground border border-border">
        ✅ Tailwind utility styles are active and rendering
      </div>
    </main>
  );
}
