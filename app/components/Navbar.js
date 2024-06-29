'use client'
import Link from 'next/link'
import Button from './Button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const pathname = usePathname()

    const showButtons = pathname !== '/login' && pathname !== '/signup'

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Medicine', href: '/medicine' },
        { name: 'Fitness', href: '/fitness' },
        { name: 'Entertainment', href: '/enterntainment' },
        { name: 'Doctor Support', href: '/docsupport' }
    ];

    return (
        

        <div>

            {showButtons && (
            <>
                <div className=" h-20 flex items-center justify-around">
                <div>
                    <Image src="/logo.png"  alt="logo" width={300} height={200} />
                </div>
                <ul className="flex justify-between items-center mx-0">
                    {navLinks.map((link) => (
                        <li key={link.href} className="text-xl text-[#004171] mx-6  hover:text-[#42BA85] transition-all">
                            <Link
                                className={`transition-all border-b-4 hover:border-[#42BA85]  ${pathname === link.href ? 'font-extrabold' : ''}`}
                                href={link.href} 
                                >
                                    {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between ">
                    <Button name="Login" linkto="login" logged={false} />
                    <Button name="Signup" linkto="signup" logged={false} />
                </div>
            </div>
            </>
            )}
        </div>
    )
}
