import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";
import { getSession } from "@/libs/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <>
      <Navbar session={session}/>
      {children}
      <Footer />
    </>
  );
}
