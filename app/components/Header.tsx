export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-2">The Shepherd's Rest</h1>
        <nav className="flex flex-wrap gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/new" className="hover:underline">News</a>
          <a href="/volunteer" className="hover:underline">Volunteer</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/donate" className="font-bold hover:underline">Donate</a>
        </nav>
      </div>
    </header>
  );
}