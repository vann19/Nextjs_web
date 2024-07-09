"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: {data:any, status: string} = useSession();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
          </Link>
          <Link href="/profile">
            <li className={`mr-3 ${pathname === "/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
          </Link>
          <Link href="/profile/about">
            <li className={`mr-3 ${pathname === "/profile/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex">
            <h4 className="text-white mr-5">{session?.user?.fullname}</h4>
            <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" 
            onClick={() => signOut()}>Logout</button>
          </div>
          
        ) : (
          <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" 
        onClick={() => signIn()}>Login</button>
        )}
      </div>
    </nav>
  );
}
