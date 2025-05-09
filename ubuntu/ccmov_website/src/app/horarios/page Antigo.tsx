import React from 'react';

// Example data - replace with actual schedule
const scheduleData = {
  monday: [
    { time: '08:00 - 09:00', activity: 'Pilates Solo', instructor: 'Ana' },
    { time: '09:00 - 10:00', activity: 'Pilates Aparelhos', instructor: 'Sofia' },
    { time: '17:00 - 18:00', activity: 'Ballet Adulto Iniciante', instructor: 'Clara' },
    { time: '18:00 - 19:00', activity: 'Jazz Dance', instructor: 'Lucas' },
    { time: '19:00 - 20:00', activity: 'Pilates Solo', instructor: 'Ana' },
  ],
  tuesday: [
    { time: '07:00 - 08:00', activity: 'Pilates Aparelhos', instructor: 'Sofia' },
    { time: '10:00 - 11:00', activity: 'Dança Contemporânea', instructor: 'Mariana' },
    { time: '18:00 - 19:00', activity: 'Pilates Aparelhos', instructor: 'Pedro' },
    { time: '19:00 - 20:00', activity: 'Zumba', instructor: 'Rita' },
    { time: '20:00 - 21:00', activity: 'Dança de Salão', instructor: 'Carlos' },
  ],
  wednesday: [
    { time: '08:00 - 09:00', activity: 'Pilates Solo', instructor: 'Ana' },
    { time: '09:00 - 10:00', activity: 'Pilates Aparelhos', instructor: 'Sofia' },
    { time: '17:00 - 18:00', activity: 'Ballet Adulto Intermediário', instructor: 'Clara' },
    { time: '18:00 - 19:00', activity: 'Jazz Dance', instructor: 'Lucas' },
    { time: '19:00 - 20:00', activity: 'Pilates Solo', instructor: 'Ana' },
  ],
  thursday: [
    { time: '07:00 - 08:00', activity: 'Pilates Aparelhos', instructor: 'Sofia' },
    { time: '10:00 - 11:00', activity: 'Dança Contemporânea', instructor: 'Mariana' },
    { time: '18:00 - 19:00', activity: 'Pilates Aparelhos', instructor: 'Pedro' },
    { time: '19:00 - 20:00', activity: 'Zumba', instructor: 'Rita' },
    { time: '20:00 - 21:00', activity: 'Dança de Salão', instructor: 'Carlos' },
  ],
  friday: [
    { time: '08:00 - 09:00', activity: 'Pilates Solo', instructor: 'Ana' },
    { time: '09:00 - 10:00', activity: 'Pilates Aparelhos', instructor: 'Sofia' },
    { time: '17:00 - 18:00', activity: 'Danças Urbanas', instructor: 'Bruno' },
    { time: '18:00 - 19:00', activity: 'Ritmos Fitness', instructor: 'Rita' },
  ],
  saturday: [
    { time: '09:00 - 10:00', activity: 'Pilates Solo (Todos os Níveis)', instructor: 'Ana' },
    { time: '10:00 - 11:30', activity: 'Workshop Especial (Variável)', instructor: 'Convidado' },
  ],
  sunday: [], // Closed or special events
};

type DayKey = keyof typeof scheduleData;

const daysOfWeek: { key: DayKey; name: string }[] = [
  { key: 'monday', name: 'Segunda-feira' },
  { key: 'tuesday', name: 'Terça-feira' },
  { key: 'wednesday', name: 'Quarta-feira' },
  { key: 'thursday', name: 'Quinta-feira' },
  { key: 'friday', name: 'Sexta-feira' },
  { key: 'saturday', name: 'Sábado' },
  { key: 'sunday', name: 'Domingo' },
];

export default function HorariosPage() {
  return (
    <div className="space-y-12">
      <section className="text-center pt-8 pb-12 bg-gradient-to-b from-ccmov-orange/10 to-white">
        <h1 className="text-4xl font-bold text-ccmov-darkBlue mb-4">Grade de Horários</h1>
        <p className="text-xl text-ccmov-text max-w-3xl mx-auto">Encontre o melhor horário para sua aula.</p>
        <p className="text-sm text-ccmov-text mt-2">(Grade sujeita a alterações. Confirme sempre antes de vir.)</p>
      </section>

      <section className="container mx-auto px-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-ccmov-darkBlue text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Horário</th>
                <th className="py-3 px-4 text-left font-semibold">Segunda</th>
                <th className="py-3 px-4 text-left font-semibold">Terça</th>
                <th className="py-3 px-4 text-left font-semibold">Quarta</th>
                <th className="py-3 px-4 text-left font-semibold">Quinta</th>
                <th className="py-3 px-4 text-left font-semibold">Sexta</th>
                <th className="py-3 px-4 text-left font-semibold">Sábado</th>
                {/* Omitting Sunday for this example layout */}
              </tr>
            </thead>
            <tbody className="text-ccmov-text">
              {/* Example Row Structure - A more dynamic approach would map through time slots */}
              {/* This is a simplified visual representation */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">07:00 - 08:00</td>
                <td></td>
                <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Sofia)</span></td>
                <td></td>
                <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Sofia)</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">08:00 - 09:00</td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
                <td></td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
                <td></td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
                <td></td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">09:00 - 10:00</td>
                <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Sofia)</span></td>
                <td></td>
                <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Sofia)</span></td>
                <td></td>
                <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Sofia)</span></td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
              </tr>
               <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">10:00 - 11:00</td>
                <td></td>
                <td className="text-sm">Dança Cont. <span className="text-xs text-gray-500">(Mariana)</span></td>
                <td></td>
                <td className="text-sm">Dança Cont. <span className="text-xs text-gray-500">(Mariana)</span></td>
                <td></td>
                 <td className="text-sm">Workshop* <span className="text-xs text-gray-500">(Convidado)</span></td>
              </tr>
              {/* ... Add more time slots similarly ... */}
               <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">17:00 - 18:00</td>
                <td className="text-sm">Ballet Ad. Ini. <span className="text-xs text-gray-500">(Clara)</span></td>
                <td></td>
                <td className="text-sm">Ballet Ad. Int. <span className="text-xs text-gray-500">(Clara)</span></td>
                <td></td>
                <td className="text-sm">Danças Urbanas <span className="text-xs text-gray-500">(Bruno)</span></td>
                <td></td>
              </tr>
               <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">18:00 - 19:00</td>
                <td className="text-sm">Jazz Dance <span className="text-xs text-gray-500">(Lucas)</span></td>
                 <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Pedro)</span></td>
                <td className="text-sm">Jazz Dance <span className="text-xs text-gray-500">(Lucas)</span></td>
                 <td className="text-sm">Pilates Ap. <span className="text-xs text-gray-500">(Pedro)</span></td>
                <td className="text-sm">Ritmos Fitness <span className="text-xs text-gray-500">(Rita)</span></td>
                <td></td>
              </tr>
               <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">19:00 - 20:00</td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
                <td className="text-sm">Zumba <span className="text-xs text-gray-500">(Rita)</span></td>
                <td className="text-sm">Pilates Solo <span className="text-xs text-gray-500">(Ana)</span></td>
                <td className="text-sm">Zumba <span className="text-xs text-gray-500">(Rita)</span></td>
                <td></td>
                <td></td>
              </tr>
               <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">20:00 - 21:00</td>
                <td></td>
                <td className="text-sm">Dança de Salão <span className="text-xs text-gray-500">(Carlos)</span></td>
                <td></td>
                <td className="text-sm">Dança de Salão <span className="text-xs text-gray-500">(Carlos)</span></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
         <p className="text-xs text-gray-500 mt-4">*Workshops de Sábado podem ter duração e horários variáveis. Consulte a programação.</p>
      </section>
    </div>
  );
}

