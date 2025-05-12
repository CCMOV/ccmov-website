export default function EventosPage() {
  return (
    <>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Nossos Eventos</h1>
        {/* Placeholder for event list and calendar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Próximos Eventos (Lista)</h2>
            {/* Event list will go here */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <p>Em breve, listaremos nossos próximos eventos aqui.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Calendário</h2>
            {/* Calendar component will go here */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <p>Calendário interativo em breve.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

