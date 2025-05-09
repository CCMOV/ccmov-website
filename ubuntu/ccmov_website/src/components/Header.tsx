import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/ccmov-logo.png" alt="CCMOV Logo" width={150} height={40} priority />
        </Link>
        <div className="space-x-6 text-ccmov-darkBlue">
          <Link href="/" className="hover:text-ccmov-blue transition-colors duration-200">Início</Link>
          <Link href="/sobre" className="hover:text-ccmov-blue transition-colors duration-200">Sobre Nós</Link>
          <Link href="/aulas" className="hover:text-ccmov-blue transition-colors duration-200">Nossas Aulas</Link>
          <Link href="/horarios" className="hover:text-ccmov-blue transition-colors duration-200">Horários</Link>
          <Link href="/contato" className="hover:text-ccmov-blue transition-colors duration-200">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

