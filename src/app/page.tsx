import type { Metadata } from "next";




export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    
  ),
  title: "Home",
  description: "aplikasi untuk belajar nextjs",
  authors: [{ name: "Fansyaode19", url: "https://github.com/vann19" }],
  icons: {
    icon: "/icons/logo.png", // cara nambahin icon metadata
  },
  openGraph: {
    type: "website",
    title: "Home",
  },
};

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
