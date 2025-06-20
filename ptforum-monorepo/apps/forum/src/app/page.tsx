// apps/forum/src/app/page.tsx
export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold">Tailwind v4 is up and running!</h1>
      <button className="btn-primary">Click Me</button>
      <div className="debug-box">
        ✅ Tailwind utility styles are active and rendering
      </div>
    </div>
  );
}
