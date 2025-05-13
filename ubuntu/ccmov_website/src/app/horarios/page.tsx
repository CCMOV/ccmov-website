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
  sunday: [], // Domingo incluído para a visualização de calendário, mesmo sem aulas
};

type DayKey = keyof typeof scheduleData;

const daysOfWeek: { key: DayKey; name: string }[] = [
  { key: 'monday', name: 'Segunda' },
  { key: 'tuesday', name: 'Terça' },
  { key: 'wednesday', name: 'Quarta' },
  { key: 'thursday', name: 'Quinta' },
  { key: 'friday', name: 'Sexta' },
  { key: 'saturday', name: 'Sábado' },
  { key: 'sunday', name: 'Domingo' }, // Adicionado para o calendário desktop
];

// Get all unique time slots from the scheduleData and sort them
const allTimeSlots = [...new Set(Object.values(scheduleData).flat().map(item => item.time))].sort((a, b) => {
  const [hA, mA] = a.split(':').map(Number);
  const [hB, mB] = b.split(':').map(Number);
  if (hA !== hB) return hA - hB;
  return mA - mB;
});

// Function to render activity text with parentheses styled
const renderActivityText = (activity: string) => {
  const parts = activity.split(/(\([^)]*\))/g); // Split and capture content in parentheses
  return parts.map((part, index) => {
    if (part && part.startsWith('(') && part.endsWith(')')) {
      return <span key={index} className="text-xs text-gray-500">{part}</span>;
    }
    return part;
  });
};

// --- Mobile View Component ---
const MobileScheduleView = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey>('monday');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const mobileDaysOrder: DayKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const handleDaySelect = (day: DayKey) => {
    setSelectedDay(day);
    setIsBottomSheetOpen(false);
  };

  const currentDayActivities = scheduleData[selectedDay] || [];
  const currentDayName = daysOfWeek.find(d => d.key === selectedDay)?.name || 'Dia';

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="my-6 text-center">
        <button
          onClick={() => setIsBottomSheetOpen(true)}
          className="bg-ccmov-orange text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold flex items-center justify-center mx-auto"
        >
          {currentDayName}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {currentDayActivities.length > 0 ? (
        <ul className="space-y-4">
          {currentDayActivities.sort((a,b) => a.time.localeCompare(b.time)).map((entry, i) => (
            <li key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="text-ccmov-darkBlue font-semibold text-lg">{entry.time}</p>
              <p className="text-ccmov-text text-md">{renderActivityText(entry.activity)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-ccmov-text py-8">Nenhuma atividade para {currentDayName}.</p>
      )}

      {isBottomSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-end" onClick={() => setIsBottomSheetOpen(false)}>
          <div className="bg-white w-full rounded-t-2xl p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-ccmov-darkBlue">Selecione o Dia</h3>
                <button onClick={() => setIsBottomSheetOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="space-y-2">
              {mobileDaysOrder.map(dayKey => {
                const dayObject = daysOfWeek.find(d => d.key === dayKey);
                return (
                  <li key={dayKey}>
                    <button
                      onClick={() => handleDaySelect(dayKey)}
                      className={`w-full text-left p-3 rounded-md font-medium transition-colors
                        ${selectedDay === dayKey 
                          ? 'bg-ccmov-orange text-white' 
                          : 'hover:bg-ccmov-orange/10 text-ccmov-text'}`}
                    >
                      {dayObject?.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Desktop View Component ---
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
                      {entries.length === 0 && <div className="h-full w-full"></div>} {/* Placeholder for empty cells */}
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

// --- Main Page Component ---
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


