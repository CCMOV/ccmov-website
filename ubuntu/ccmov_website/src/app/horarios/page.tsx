export default function HorariosPage() {
  const schedule = {
    Segunda: [
      { time: "07:00", activity: "Pilates" },
      { time: "08:00", activity: "Pilates" },
      { time: "09:00", activity: "Pilates" },
      { time: "10:00", activity: "Pilates" },
      { time: "17:00", activity: "Pilates | Dança de Salão", style: "(Iniciado)" },
      { time: "18:00", activity: "Pilates | Tango | Dança do Ventre", style: "(Iniciante)" },
      { time: "19:00", activity: "Pilates | Sertanejo | Dança do Ventre", style: "(Iniciante / Básico I)" },
      { time: "20:00", activity: "Pilates | Zouk", style: "(Iniciante)" },
    ],
    Terça: [
      { time: "07:00", activity: "Pilates" },
      { time: "08:00", activity: "Pilates" },
      { time: "09:00", activity: "Pilates" },
      { time: "10:00", activity: "Pilates" },
      { time: "17:00", activity: "Pilates | Dança de Salão", style: "(Iniciante)" },
      { time: "18:00", activity: "Pilates | Salsa | Dança do Ventre", style: "(Iniciante)" },
      { time: "19:00", activity: "Pilates | Bachata | Dança do Ventre", style: "(Iniciado / Básico I)" },
      { time: "20:00", activity: "Pilates | Tango", style: "(Iniciante)" },
      { time: "21:00", activity: "Vals e Milonga", style: "(Iniciante)" },
    ],
    Quarta: [
      { time: "07:00", activity: "Pilates" },
      { time: "08:00", activity: "Pilates" },
      { time: "09:00", activity: "Pilates" },
      { time: "10:00", activity: "Pilates" },
      { time: "17:00", activity: "Pilates" },
      { time: "18:00", activity: "Pilates | Forró | Ballet", style: "(Iniciante / Infantil)" },
      { time: "19:00", activity: "Pilates | Samba de Gafieira", style: "(Iniciado)" },
      { time: "20:00", activity: "Pilates | Bolero", style: "(Intermediário)" },
      { time: "21:00", activity: "Tango", style: "(Intermediário)" },
    ],
    Quinta: [
      { time: "07:00", activity: "Pilates" },
      { time: "08:00", activity: "Pilates" },
      { time: "09:00", activity: "Pilates" },
      { time: "10:00", activity: "Pilates" },
      { time: "17:00", activity: "Pilates | Bachata e Forró", style: "(Iniciado)" },
      { time: "18:00", activity: "Pilates | Bolero", style: "(Intermediário)" },
      { time: "19:00", activity: "Pilates | Samba", style: "(Iniciante)" },
      { time: "20:00", activity: "Pilates" },
    ],
    Sexta: [
      { time: "07:00", activity: "Pilates" },
      { time: "08:00", activity: "Pilates" },
      { time: "09:00", activity: "Pilates" },
      { time: "10:00", activity: "Pilates" },
      { time: "17:00", activity: "Pilates" },
      { time: "18:00", activity: "Pilates" },
      { time: "19:00", activity: "Pilates" },
      { time: "20:00", activity: "Pilates" },
    ],
    Sábado: [
      { time: "13:00", activity: "Samba de Gafieira", style: "(Iniciante)" },
      { time: "14:00", activity: "Zouk e Forró", style: "(Iniciante)" },
    ],
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Horários das Aulas</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(schedule).map(([day, items]) => (
          <div key={day} className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">{day}</h2>
            <ul className="space-y-2">
              {items.map(({ time, activity, style }, idx) => (
                <li key={idx} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{time}</span>
                  <span className="text-right">
                    {activity}
                    {style && (
                      <span className="ml-1 text-gray-500 text-sm font-normal"> {style}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
