export default function ProfilLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
      <ul className="text-white px-5 py-5">
        <li>Home</li>
        <li>Profile</li>
        <li>About</li>
      </ul>
    </nav>
    <div>{children}</div>
    </>
  );
}