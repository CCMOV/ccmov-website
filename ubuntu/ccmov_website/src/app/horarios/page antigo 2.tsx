import React from 'react';

const scheduleData = {
  monday: [
    { time: '07:00', activity: 'Pilates' },
    { time: '08:00', activity: 'Pilates' },
    { time: '09:00', activity: 'Pilates' },
    { time: '10:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Dança de Salão (Iniciado)' },
    { time: '18:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Tango (Iniciante)' },
    { time: '18:00', activity: 'Dança do Ventre (Iniciante)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Sertanejo (Iniciante)' },
    { time: '19:00', activity: 'Dança do Ventre (Básico I)' },
    { time: '20:00', activity: 'Pilates' },
    { time: '20:00', activity: 'Zouk (Iniciante)' },
  ],
  tuesday: [
    { time: '07:00', activity: 'Pilates' },
    { time: '08:00', activity: 'Pilates' },
    { time: '09:00', activity: 'Pilates' },
    { time: '10:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Dança de Salão (Iniciante)' },
    { time: '18:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Salsa (Iniciante)' },
    { time: '18:00', activity: 'Dança do Ventre (Iniciante)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Bachata (Iniciado)' },
    { time: '19:00', activity: 'Dança do Ventre (Básico I)' },
    { time: '20:00', activity: 'Pilates' },
    { time: '20:00', activity: 'Tango (Iniciante)' },
    { time: '21:00', activity: 'Vals e Milonga (Iniciante)' },
  ],
  wednesday: [
    { time: '07:00', activity: 'Pilates' },
    { time: '08:00', activity: 'Pilates' },
    { time: '09:00', activity: 'Pilates' },
    { time: '10:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Forró (Iniciante)' },
    { time: '18:00', activity: 'Ballet (Infantil)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Samba de Gafieira (Iniciado)' },
    { time: '20:00', activity: 'Pilates' },
    { time: '20:00', activity: 'Bolero (Intermediário)' },
    { time: '21:00', activity: 'Tango (Intermediário)' },
  ],
  thursday: [
    { time: '07:00', activity: 'Pilates' },
    { time: '08:00', activity: 'Pilates' },
    { time: '09:00', activity: 'Pilates' },
    { time: '10:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Bachata e Forró (Iniciado)' },
    { time: '18:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Bolero (Intermediário)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Samba (Iniciante)' },
    { time: '20:00', activity: 'Pilates' },
  ],
  friday: [
    { time: '07:00', activity: 'Pilates' },
    { time: '08:00', activity: 'Pilates' },
    { time: '09:00', activity: 'Pilates' },
    { time: '10:00', activity: 'Pilates' },
    { time: '17:00', activity: 'Pilates' },
    { time: '18:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Pilates' },
    { time: '20:00', activity: 'Pilates' },
  ],
  saturday: [
    { time: '13:00', activity: 'Samba de Gafieira (Iniciante)' },
    { time: '14:00', activity: 'Zouk e Forró (Iniciante)' },
  ],
  sunday: [],
};

type DayKey = keyof typeof scheduleData;

const daysOfWeek: { key: DayKey; name: string }[] = [
  { key: 'monday', name: 'Segunda' },
  { key: 'tuesday', name: 'Terça' },
  { key: 'wednesday', name: 'Quarta' },
  { key: 'thursday', name: 'Quinta' },
  { key: 'friday', name: 'Sexta' },
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
                {daysOfWeek.slice(0, 6).map(day => (
                  <th key={day.key} className="py-3 px-4 text-left font-semibold">{day.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-ccmov-text">
              {[...new Set(Object.values(scheduleData).flat().map(item => item.time))]
                .sort()
                .map(time => (
                  <tr key={time} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{time}</td>
                    {daysOfWeek.slice(0, 6).map(day => {
                      const entries = scheduleData[day.key].filter(entry => entry.time === time);
                      return (
                        <td key={day.key} className="text-sm py-3 px-4 space-y-1">
                          {entries.map((entry, i) => (
                            <div key={i}>{entry.activity}</div>
                          ))}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
