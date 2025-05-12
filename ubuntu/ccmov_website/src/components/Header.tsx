import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from "react"; // useEffect might be needed if we add body scroll lock

export default function Header() {
  const whatsappLink = "https://wa.me/5511957200359";
  const instagramLink = "https://www.instagram.com/ccmov.sp?igsh=MWxhZWNldWg0dG9xNA%3D%3D&utm_source=qr";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close menu on route change (if Link onClick isn't enough or for browser back/forward)
  // This would require access to Next.js router events, which is more complex here.
  // For now, onClick on Link should suffice for direct clicks.

  // Optional: Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
          <Image src="/ccmov-logo.png" alt="CCMOV Logo" width={150} height={40} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 text-ccmov-darkBlue items-center">
          <Link href="/" className="hover:text-ccmov-blue transition-colors duration-200">Início</Link>
          <Link href="/sobre" className="hover:text-ccmov-blue transition-colors duration-200">Sobre Nós</Link>
          <Link href="/aulas" className="hover:text-ccmov-blue transition-colors duration-200">Nossas Aulas</Link>
          <Link href="/horarios" className="hover:text-ccmov-blue transition-colors duration-200">Horários</Link>
          <Link href="/eventos" className="hover:text-ccmov-blue transition-colors duration-200">Eventos</Link>
          <Link href="/contato" className="hover:text-ccmov-blue transition-colors duration-200">Contato</Link>
        </div>

        {/* Social Icons & Mobile Menu Button Container */}
        <div className="flex items-center space-x-3">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-ccmov-darkBlue hover:text-ccmov-blue transition-colors duration-200">
            <Instagram size={24} />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-ccmov-darkBlue hover:text-ccmov-blue transition-colors duration-200">
            <MessageCircle size={24} />
          </a>
           {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-ccmov-darkBlue focus:outline-none" aria-label="Abrir menu mobile">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Links - Collapsible */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-2 bg-white space-y-1 absolute w-full shadow-lg z-40 left-0">
          <Link href="/" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Início</Link>
          <Link href="/sobre" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Sobre Nós</Link>
          <Link href="/aulas" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Nossas Aulas</Link>
          <Link href="/horarios" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Horários</Link>
          <Link href="/eventos" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Eventos</Link>
          <Link href="/contato" className="block hover:text-ccmov-blue transition-colors duration-200 py-3 w-full text-center text-ccmov-darkBlue" onClick={toggleMobileMenu}>Contato</Link>
        </div>
      )}
    </header>
  );
}

