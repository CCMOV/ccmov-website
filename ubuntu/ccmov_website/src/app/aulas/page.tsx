import Image from "next/image";

export default function AulasPage() {
  return (
    <div className="space-y-16">
      <section className="text-center pt-8 pb-12 bg-gradient-to-b from-ccmov-purple/10 to-white">
        <h1 className="text-4xl font-bold text-ccmov-darkBlue mb-4">Nossas Aulas</h1>
        <p className="text-xl text-ccmov-text max-w-3xl mx-auto">Descubra as modalidades que oferecemos para você se movimentar.</p>
      </section>

      {/* Dance Section */}
      <section id="danca" className="container mx-auto px-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-ccmov-orange mb-8 text-center md:text-left">Dança</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <Image src="/dance_class_group.jpeg" alt="Aula de Dança CCMOV" width={500} height={350} className="w-full h-80 object-cover rounded-lg" />
          <div className="order-2 md:order-1">
            <p className="text-ccmov-text mb-4 leading-relaxed">
              Liberte sua expressão e energia com nossas aulas de dança! Oferecemos uma variedade de estilos para todos os gostos e níveis, desde iniciantes até avançados. A dança é uma forma divertida e eficaz de melhorar o condicionamento físico, a coordenação motora, a flexibilidade e o bem-estar emocional.
            </p>
            <h4 className="font-semibold text-ccmov-darkBlue mb-2">Estilos Oferecidos (Exemplos):</h4>
            <ul className="list-disc list-inside text-ccmov-text space-y-1 mb-4">
              <li>Ballet Clássico (Infantil e Adulto)</li>
              <li>Jazz Dance</li>
              <li>Dança Contemporânea</li>
              <li>Danças Urbanas / Hip Hop</li>
              <li>Dança de Salão</li>
              <li>Zumba / Ritmos Fitness</li>
            </ul>
            <p className="text-ccmov-text leading-relaxed">
              Nossos instrutores experientes criam um ambiente positivo e encorajador, ajudando você a desenvolver sua técnica e a encontrar a alegria de dançar. Venha fazer uma aula experimental!
            </p>
          </div>
        </div>
      </section>

      {/* Pilates Section */}
      <section id="pilates" className="container mx-auto px-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-ccmov-blue mb-8 text-center md:text-left">Pilates</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image src="/pilates_class_group.webp" alt="Aula de Pilates CCMOV" width={500} height={350} className="w-full h-80 object-cover rounded-lg" />
          <div className="order-2">
            <p className="text-ccmov-text mb-4 leading-relaxed">
              Fortaleça seu corpo de dentro para fora com o Pilates. Nosso estúdio oferece aulas de Mat Pilates (solo) e Pilates em Aparelhos, adaptadas às suas necessidades individuais. O método Pilates foca no controle, precisão, fluidez dos movimentos e respiração, promovendo força muscular (especialmente do core), flexibilidade, melhora da postura e alívio de dores.
            </p>
            <h4 className="font-semibold text-ccmov-darkBlue mb-2">Benefícios do Pilates:</h4>
            <ul className="list-disc list-inside text-ccmov-text space-y-1 mb-4">
              <li>Fortalecimento do Core (abdômen, lombar, pelve)</li>
              <li>Melhora da Postura e Alinhamento Corporal</li>
              <li>Aumento da Flexibilidade e Mobilidade</li>
              <li>Alívio de Dores nas Costas e Articulações</li>
              <li>Melhora da Consciência Corporal e Concentração</li>
              <li>Prevenção de Lesões</li>
            </ul>
            <p className="text-ccmov-text leading-relaxed">
              Seja você um iniciante ou já praticante, nossas aulas de Pilates ajudarão você a alcançar um corpo mais forte, equilibrado e consciente. Agende sua avaliação!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

