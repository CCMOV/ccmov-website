// Mock data for an event, replace with actual data fetching
async function getEventData(id: string) {
  // In a real app, you would fetch this from your API or data source
  // For now, we'll return a mock event if id is '1'
  if (id === '1') {
    return {
      id: '1',
      name: 'Evento de Exemplo',
      date: '2025-06-15',
      time: '14:00 - 16:00',
      location: 'Local Exemplo',
      description: 'Esta é uma descrição detalhada do evento de exemplo. Participe e divirta-se!',
      imageUrl: '/dance_class_group.jpeg', // Placeholder image
      link: '#',
    };
  }
  return null;
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEventData(params.id);

  if (!event) {
    return (
      <>
        {/* Header and Footer removed as they are in RootLayout */}
        <main className="container mx-auto py-8 px-4 text-center">
          <h1 className="text-2xl font-bold">Evento não encontrado</h1>
        </main>
      </>
    );
  }

  return (
    <>
      {/* Header and Footer removed as they are in RootLayout */}
      <main className="container mx-auto py-8 px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
          {event.imageUrl && (
            <img src={event.imageUrl} alt={event.name} className="w-full h-auto rounded-lg mb-6" />
          )}
          <div className="mb-4">
            <p className="text-lg"><span className="font-semibold">Data:</span> {new Date(event.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
            <p className="text-lg"><span className="font-semibold">Horário:</span> {event.time}</p>
            <p className="text-lg"><span className="font-semibold">Local:</span> {event.location}</p>
          </div>
          <div className="prose lg:prose-xl mb-6">
            <p>{event.description}</p>
          </div>
          {event.link && event.link !== '#' && (
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Inscreva-se / Mais Informações
            </a>
          )}
        </article>
      </main>
    </>
  );
}

