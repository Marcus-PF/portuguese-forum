import type { User } from '@ptforum/shared/types';
import { Button } from '@ptforum/ui';

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

      {/* Standard Variant */}
      <Button variant="secondary">Even Better, Click Me!</Button>

      {/* Custom Style via Class */}
      <Button className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-md">
        Custom-Styled Button
      </Button>

      <div className="debug-box">
        ✅ Tailwind utility styles are active and rendering
      </div>
    </div>
  );
}
