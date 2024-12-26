import ReduxProvider from "@/components/providers/ReduxProvider";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";
import { getSession } from "@/libs/auth";
import { getSaves } from "@/libs/save";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [session, saves] = await Promise.all([getSession(), getSaves()]) 

  return (
    <ReduxProvider saves={saves}>
      <Navbar session={session}/>
      {children}
      <Footer />
    </ReduxProvider>
  );
}
