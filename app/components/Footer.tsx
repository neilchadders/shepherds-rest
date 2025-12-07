export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>&copy; {new Date().getFullYear()} Shepherd's Rest. All rights reserved.</p>
      <p>Website Designed and built by Neil Chadwick</p>
    </footer>
  );
}