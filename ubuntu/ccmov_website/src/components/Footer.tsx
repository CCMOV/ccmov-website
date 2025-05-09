import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ccmov-darkBlue text-white mt-12 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">&copy; {currentYear} CCMOV - Academia Centro Corpo em Movimento. Todos os direitos reservados.</p>
        <p className="text-sm mb-4">Rua Humberto I, 440 - Vila Mariana, São Paulo - SP</p>
        <div className="space-x-4">
          {/* Add social media links here if available */}
          {/* Example: <Link href="#" className="hover:text-ccmov-blue">Instagram</Link> */}
          <Link href="/contato" className="hover:text-ccmov-blue">Entre em Contato</Link>
        </div>
      </div>
    </footer>
  );
}

