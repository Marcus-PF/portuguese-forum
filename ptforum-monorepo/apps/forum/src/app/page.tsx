// apps/forum/src/app/page.tsx
import type { User } from '@ptforum/shared/types';

const user: User = {
  id: 'u1',
  name: 'Marcus',
  email: 'marcus@example.com',
  roles: ['admin'],
  isActive: true,
};

export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold">Tailwind v4 is up and running!</h1>
      <h2 className="text-5xl font-bold">Hello, {user.name}!</h2>
      <button className="btn-primary">Click Me</button>
      <div className="debug-box">
        ✅ Tailwind utility styles are active and rendering
      </div>
    </div>
  );
}
