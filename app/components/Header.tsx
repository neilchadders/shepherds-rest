export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-2">Shepherd's Rest</h1>
        <nav className="flex flex-wrap gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/new" className="hover:underline">News</a>
          <a href="/want-to-help" className="hover:underline">Help</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}