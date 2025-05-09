import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-ccmov-blue via-ccmov-purple to-ccmov-orange text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Optional: Add a subtle background pattern or image related to dance/movement */}
        </div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Bem-vindo(a) à CCMOV!</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">O seu espaço de Dança e Pilates na Vila Mariana. Aqui você se move!</p>
          <Link href="/aulas" className="bg-white text-ccmov-darkBlue font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
            Conheça Nossas Aulas
          </Link>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-ccmov-darkBlue mb-6">Sobre Nós</h2>
        <p className="text-lg text-ccmov-text max-w-3xl mx-auto mb-6">
          Na CCMOV (Centro Corpo em Movimento), acreditamos no poder transformador do movimento. Oferecemos um ambiente acolhedor e inspirador para você cuidar do corpo e da mente através da dança e do pilates.
        </p>
        <Link href="/sobre" className="text-ccmov-blue hover:underline font-medium">
          Saiba mais sobre nossa história e filosofia
        </Link>
      </section>

      {/* Classes Overview */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-ccmov-darkBlue mb-8">Nossas Modalidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dance Card */}
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Image src="/dance_class_group.jpeg" alt="Aula de Dança CCMOV" width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-ccmov-purple mb-3">Dança</h3>
              <p className="text-ccmov-text mb-4">
                Explore diversos ritmos, expresse-se e divirta-se enquanto melhora seu condicionamento físico e bem-estar.
              </p>
              <Link href="/aulas#danca" className="text-ccmov-orange hover:underline font-medium">
                Ver aulas de Dança
              </Link>
            </div>
            {/* Pilates Card */}
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Image src="/pilates_class_group.webp" alt="Aula de Pilates CCMOV" width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-ccmov-purple mb-3">Pilates</h3>
              <p className="text-ccmov-text mb-4">
                Fortaleça seu corpo, melhore a postura, aumente a flexibilidade e alivie tensões com nossas aulas de Pilates solo e aparelhos.
              </p>
              <Link href="/aulas#pilates" className="text-ccmov-blue hover:underline font-medium">
                Ver aulas de Pilates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Contact */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-ccmov-darkBlue mb-6">Pronto para Começar?</h2>
        <p className="text-lg text-ccmov-text max-w-3xl mx-auto mb-8">
          Entre em contato conosco para agendar uma aula experimental ou tirar suas dúvidas. Estamos ansiosos para receber você!
        </p>
        <Link href="/contato" className="bg-ccmov-purple text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
          Fale Conosco
        </Link>
      </section>
    </div>
  );
}

