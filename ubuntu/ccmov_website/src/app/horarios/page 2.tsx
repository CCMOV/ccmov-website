// src/app/horarios/page.tsx

"use client";

import React from "react";

const schedule = {
  Segunda: {
    "07:00": ["Pilates"],
    "08:00": ["Pilates"],
    "09:00": ["Pilates"],
    "10:00": ["Pilates"],
    "17:00": ["Pilates", "Dança de Salão (Iniciado)"],
    "18:00": ["Pilates", "Tango (Iniciante)", "Dança do Ventre (Iniciante)"],
    "19:00": ["Pilates", "Sertanejo (Iniciante)", "Dança do Ventre (Básico I)"],
    "20:00": ["Pilates", "Zouk (Iniciante)"],
  },
  Terça: {
    "07:00": ["Pilates"],
    "08:00": ["Pilates"],
    "09:00": ["Pilates"],
    "10:00": ["Pilates"],
    "17:00": ["Pilates", "Dança de Salão (Iniciante)"],
    "18:00": ["Pilates", "Salsa (Iniciante)", "Dança do Ventre (Iniciante)"],
    "19:00": ["Pilates", "Bachata (Iniciado)", "Dança do Ventre (Básico I)"],
    "20:00": ["Pilates", "Tango (Iniciante)"],
    "21:00": ["Vals e Milonga (Iniciante)"],
  },
  Quarta: {
    "07:00": ["Pilates"],
    "08:00": ["Pilates"],
    "09:00": ["Pilates"],
    "10:00": ["Pilates"],
    "17:00": ["Pilates"],
    "18:00": ["Pilates", "Forró (Iniciante)", "Ballet (Infantil)"],
    "19:00": ["Pilates", "Samba de Gafieira (Iniciado)"],
    "20:00": ["Pilates", "Bolero (Intermediário)"],
    "21:00": ["Tango (Intermediário)"],
  },
  Quinta: {
    "07:00": ["Pilates"],
    "08:00": ["Pilates"],
    "09:00": ["Pilates"],
    "10:00": ["Pilates"],
    "17:00": ["Pilates", "Bachata e Forró (Iniciado)"],
    "18:00": ["Pilates", "Bolero (Intermediário)"],
    "19:00": ["Pilates", "Samba (Iniciante)"],
    "20:00": ["Pilates"],
    "21:00": [],
  },
  Sexta: {
    "07:00": ["Pilates"],
    "08:00": ["Pilates"],
    "09:00": ["Pilates"],
    "10:00": ["Pilates"],
    "17:00": ["Pilates"],
    "18:00": ["Pilates"],
    "19:00": ["Pilates"],
    "20:00": ["Pilates"],
    "21:00": [],
  },
  Sábado: {
    "13:00": ["Samba de Gafieira (Iniciante)"],
    "14:00": ["Zouk e Forró (Iniciante)"],
  },
};

const HorariosPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
        Agenda de Aulas
      </h1>
      <div className="space-y-8">
        {Object.entries(schedule).map(([dia, horarios]) => (
          <div key={dia}>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              {dia}
            </h2>
            <div className="space-y-2">
              {Object.entries(horarios).map(([hora, aulas]) => (
                <div
                  key={hora}
                  className="bg-purple-50 rounded-xl p-4 shadow-sm border border-purple-100"
                >
                  <p className="font-semibold text-purple-600">{hora}</p>
                  <ul className="ml-4 list-disc text-gray-800">
                    {aulas.length > 0 ? (
                      aulas.map((aula, idx) => {
                        const match = aula.match(/(.*?)(\s\((.*?)\))?$/);
                        const nome = match?.[1] || aula;
                        const nivel = match?.[3];

                        return (
                          <li key={idx}>
                            {nome}
                            {nivel && (
                              <span className="text-sm text-gray-500">
                                {" "}
                                ({nivel})
                              </span>
                            )}
                          </li>
                        );
                      })
                    ) : (
                      <li className="text-gray-400 italic">Sem aula</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorariosPage;
