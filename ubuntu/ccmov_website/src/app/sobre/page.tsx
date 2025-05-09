import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="space-y-12">
      <section className="text-center pt-8 pb-12 bg-gradient-to-b from-ccmov-blue/10 to-white">
        <h1 className="text-4xl font-bold text-ccmov-darkBlue mb-4">Sobre a CCMOV</h1>
        <p className="text-xl text-ccmov-text max-w-3xl mx-auto">Conheça nossa história, filosofia e o que nos move.</p>
      </section>

      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-ccmov-purple mb-4">Nossa História</h2>
          <p className="text-ccmov-text mb-4 leading-relaxed">
            A Academia Centro Corpo em Movimento (CCMOV) nasceu do sonho de criar um espaço único na Vila Mariana, dedicado ao bem-estar integral através da dança e do pilates. Desde [Ano de Fundação - Exemplo: 2015], buscamos oferecer aulas de alta qualidade em um ambiente acolhedor e motivador, onde cada aluno se sinta inspirado a explorar seu potencial e a encontrar alegria no movimento.
          </p>
          <p className="text-ccmov-text leading-relaxed">
            Nossa equipe é formada por profissionais apaixonados e qualificados, prontos para guiar você em sua jornada de saúde e autoconhecimento. Acreditamos que movimento é vida, e nosso objetivo é ajudar você a viver de forma mais plena e saudável.
          </p>
        </div>
        <Image src="/studio_interior.jpeg" alt="Estúdio CCMOV" width={500} height={700} className="w-full h-80 md:h-96 object-cover rounded-lg" />
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-ccmov-darkBlue mb-8">Nossa Filosofia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-ccmov-blue mb-3">Movimento é Saúde</h3>
              <p className="text-ccmov-text text-sm">
                Acreditamos que manter o corpo ativo é fundamental para a saúde física e mental. Nossas aulas são projetadas para todos os níveis e idades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-ccmov-purple mb-3">Bem-Estar Integral</h3>
              <p className="text-ccmov-text text-sm">
                Buscamos o equilíbrio entre corpo e mente, oferecendo atividades que promovem relaxamento, consciência corporal e alegria.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-ccmov-orange mb-3">Comunidade Acolhedora</h3>
              <p className="text-ccmov-text text-sm">
                Queremos que a CCMOV seja mais que uma academia, um lugar onde você se sinta em casa, faça amigos e compartilhe bons momentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maybe a section about instructors - Placeholder */}
      {/* <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-ccmov-darkBlue mb-8 text-center">Nossos Instrutores</h2>
        {/* Add instructor profiles here */}
      {/* </section> */}
    </div>
  );
}

