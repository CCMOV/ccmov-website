'use client';
import React, { useState, useEffect } from 'react';

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
    { time: '18:00', activity: 'Ballet (Infantil)' },
    { time: '18:00', activity: 'Salsa (Iniciante)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Ballet (Adulto)' },
    { time: '19:00', activity: 'Bachata (Iniciado)' },
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
    { time: '18:00', activity: 'Ballet (Infantil)' },
    { time: '18:00', activity: 'Bolero (Intermediário)' },
    { time: '19:00', activity: 'Pilates' },
    { time: '19:00', activity: 'Ballet (Adulto)' },
    { time: '19:00', activity: 'Samba de Gafieira (Iniciante)' },
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
  { key: 'monday', name: 'Segunda-feira' },
  { key: 'tuesday', name: 'Terça-feira' },
  { key: 'wednesday', name: 'Quarta-feira' },
  { key: 'thursday', name: 'Quinta-feira' },
  { key: 'friday', name: 'Sexta-feira' },
  { key: 'saturday', name: 'Sábado' },
  { key: 'sunday', name: 'Domingo' },
];

const allTimeSlots = [...new Set(Object.values(scheduleData).flat().map(item => item.time))].sort((a, b) => {
  const [hA, mA] = a.split(':').map(Number);
  const [hB, mB] = b.split(':').map(Number);
  if (hA !== hB) return hA - hB;
  return mA - mB;
});

const renderActivityText = (activity: string) => {
  const parts = activity.split(/(\([^)]*\))/g);
  return parts.map((part, index) => {
    if (part && part.startsWith('(') && part.endsWith(')')) {
      return <span key={index} className="text-xs text-gray-500">{part}</span>;
    }
    return part;
  });
};

// --- Mobile View Component (Accordion Style) ---
const MobileScheduleView = () => {
  const [openDayKey, setOpenDayKey] = useState<DayKey | null>('monday'); // Start with Monday open
  const mobileDaysOrder: DayKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const toggleDay = (dayKey: DayKey) => {
    setOpenDayKey(prevOpenDayKey => (prevOpenDayKey === dayKey ? null : dayKey));
  };

  return (
    <div className="container mx-auto px-4 pb-8 space-y-3">
      {mobileDaysOrder.map(dayKey => {
        const dayObject = daysOfWeek.find(d => d.key === dayKey);
        const activities = scheduleData[dayKey] || [];
        const isOpen = openDayKey === dayKey;

        return (
          <div key={dayKey} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleDay(dayKey)}
              className="w-full flex justify-between items-center p-4 bg-ccmov-orange/10 hover:bg-ccmov-orange/20 transition-colors focus:outline-none"
            >
              <span className="text-lg font-semibold text-ccmov-darkBlue">{dayObject?.name}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 text-ccmov-orange transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="p-4 bg-white">
                {activities.length > 0 ? (
                  <ul className="space-y-3">
                    {activities.sort((a,b) => a.time.localeCompare(b.time)).map((entry, i) => (
                      <li key={i} className="p-3 bg-gray-50 rounded-md shadow-sm">
                        <p className="text-ccmov-darkBlue font-medium">{entry.time}</p>
                        <p className="text-ccmov-text text-sm">{renderActivityText(entry.activity)}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-ccmov-text py-4">Nenhuma atividade para {dayObject?.name}.</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


// --- Desktop View Component (Unchanged) ---
const DesktopScheduleView = () => {
  const desktopDaysOrder: DayKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-ccmov-darkBlue text-white">
            <tr>
              <th className="py-4 px-3 md:px-4 text-left font-semibold w-24">Horário</th>
              {desktopDaysOrder.map(dayKey => {
                const dayObject = daysOfWeek.find(d => d.key === dayKey);
                return (
                  <th key={dayKey} className="py-4 px-3 md:px-4 text-left font-semibold min-w-[120px] md:min-w-[150px]">{dayObject?.name}</th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-ccmov-text">
            {allTimeSlots.map(time => (
              <tr key={time} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-3 md:px-4 font-medium align-top h-24">{time}</td>
                {desktopDaysOrder.map(dayKey => {
                  const entries = scheduleData[dayKey]?.filter(entry => entry.time === time) || [];
                  return (
                    <td key={`${dayKey}-${time}`} className="text-sm py-3 px-3 md:px-4 space-y-2 align-top h-24 min-w-[120px] md:min-w-[150px]">
                      {entries.map((entry, i) => (
                        <div key={i} className="bg-ccmov-orange/10 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
                          <p className="font-semibold text-ccmov-darkBlue text-xs md:text-sm">{renderActivityText(entry.activity)}</p>
                        </div>
                      ))}
                      {entries.length === 0 && <div className="h-full w-full"></div>} 
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Main Page Component (Unchanged) ---
export default function HorariosPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="space-y-0 md:space-y-12">
      <section className="text-center pt-8 pb-8 md:pb-12 bg-gradient-to-b from-ccmov-orange/10 to-white">
        <h1 className="text-3xl md:text-4xl font-bold text-ccmov-darkBlue mb-3 md:mb-4">Grade de Horários</h1>
        <p className="text-lg md:text-xl text-ccmov-text max-w-3xl mx-auto px-4">Encontre o melhor horário para sua aula.</p>
        <p className="text-xs md:text-sm text-ccmov-text mt-2 px-4">(Grade sujeita a alterações. Confirme sempre antes de vir.)</p>
      </section>

      {isMobile ? <MobileScheduleView /> : <DesktopScheduleView />}
    </div>
  );
}

