import Link from "next/link";
import { Instagram, MessageCircle } from 'lucide-react'; // Assuming MessageCircle for WhatsApp

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511957200359"; // Brazil country code + number
  const instagramLink = "https://www.instagram.com/ccmov.sp?igsh=MWxhZWNldWg0dG9xNA%3D%3D&utm_source=qr";

  return (
    <footer className="bg-ccmov-darkBlue text-white mt-12 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="mb-2">&copy; {currentYear} CCMOV</p>
            <p className="text-sm">Academia Centro Corpo em Movimento.</p>
            <p className="text-sm">Todos os direitos reservados.</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1">Rua Humberto I, 440</p>
            <p className="text-sm">Vila Mariana, São Paulo - SP</p>
            <Link href="/contato" className="hover:text-ccmov-blue text-sm block mt-2">Entre em Contato</Link>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 items-center">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-ccmov-blue transition-colors duration-200">
              <Instagram size={28} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-ccmov-blue transition-colors duration-200">
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

