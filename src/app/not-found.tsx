import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="text-9xl font-bold">404</h2>
      <h2 className="mb-3 text-xl">Page Not Found</h2>
      <Link className="text-white bg-blue-400 p-3 rounded-2xl " href="/">Return Home</Link>
    </div>
  );
}
