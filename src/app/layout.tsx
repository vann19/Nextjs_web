"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [state, setstate] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar/> }
        {/* <div>Hello world {state}</div>
        <button onClick={() => setstate(state + 1)}>+</button> */}
        {children}
      </body>
    </html>
  );
}

