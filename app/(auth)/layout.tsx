import Image from "next/image";
import LoginBg from '@/public/loginBg.webp'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='relative h-screen '>
            <Image src={LoginBg} className='object-cover object-center size-full opacity-25' alt='bg' />
            <section className="absolute flex flex-center top-0 left-0 h-full w-full px-3 sm:px-0">
                <div className="px-5 py-7 bg-slate-950 rounded w-full h-full sm:w-[500px]">
                    {children}
                </div>
            </section>
        </main>
    );
}
