"use client"; // Add this directive for client-side interactivity

import React from 'react';

// Simple component for form fields for better structure
const FormField = ({ label, type = 'text', name, placeholder, required = false, rows }: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-ccmov-text mb-1">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        rows={rows || 4}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ccmov-blue focus:border-ccmov-blue"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ccmov-blue focus:border-ccmov-blue"
      />
    )}
  </div>
);

export default function ContatoPage() {
  // NOTE: This form is for visual purposes only in a static export.
  // For actual submission, backend functionality (e.g., an API route or a third-party service) is required.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Formulário enviado (simulação)! Para funcionalidade real, é necessário implementar o backend.');
    // Add actual form submission logic here if backend is implemented
  };

  // OpenStreetMap Embed URL for Rua Humberto I, 440, Vila Mariana, São Paulo - SP
  // Coordinates obtained from OpenStreetMap search: Lat: -23.594444, Lon: -46.652136
  const osmLat = -23.594444;
  const osmLon = -46.652136;
  const osmZoom = 17; // Zoom level for the map view (higher is closer)

  // Define the bounding box for the iframe view. This creates a small window around the marker.
  // The values are: min Longitude, min Latitude, max Longitude, max Latitude
  const delta = 0.004; // Determines the extent of the map view around the marker
  const bbox = [
    osmLon - delta / 2, // min Longitude
    osmLat - delta,   // min Latitude
    osmLon + delta / 2, // max Longitude
    osmLat + delta    // max Latitude
  ].join(',');

  const openStreetMapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${osmLat},${osmLon}`;

  return (
    <div className="space-y-12">
      <section className="text-center pt-8 pb-12 bg-gradient-to-b from-ccmov-blue/10 to-white">
        <h1 className="text-4xl font-bold text-ccmov-darkBlue mb-4">Entre em Contato</h1>
        <p className="text-xl text-ccmov-text max-w-3xl mx-auto">Adoraríamos ouvir você! Tire suas dúvidas ou agende sua visita.</p>
      </section>

      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-ccmov-purple mb-4">Nossas Informações</h2>
          <div>
            <h3 className="font-semibold text-ccmov-darkBlue mb-1">Endereço:</h3>
            <p className="text-ccmov-text">Rua Humberto I, 440<br />Vila Mariana, São Paulo - SP<br />CEP: 04018-031</p>
            {/* OpenStreetMap Embed */}
            <div className="mt-4 w-full h-80 md:h-96 rounded-md overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={openStreetMapEmbedUrl}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-ccmov-darkBlue mb-1">Telefone:</h3>
            <p className="text-ccmov-text">(11) 95720-0359</p>
          </div>
          <div>
            <h3 className="font-semibold text-ccmov-darkBlue mb-1">Email:</h3>
            <p className="text-ccmov-text">contato@ccmov.com.br</p>
          </div>
          <div>
            <h3 className="font-semibold text-ccmov-darkBlue mb-1">Horário de Funcionamento:</h3>
            <p className="text-ccmov-text">Segunda a Sexta: 07:00 - 22:00<br />Sábado: 09:00 - 15:00<br />Domingo: Fechado</p>
            <p className="text-xs text-gray-500 mt-1">(Horários de aula podem variar, consulte a grade)</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-ccmov-purple mb-4">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Nome" name="name" placeholder="Seu nome completo" required />
            <FormField label="Email" type="email" name="email" placeholder="seu.email@exemplo.com" required />
            <FormField label="Telefone" type="tel" name="phone" placeholder="(XX) XXXXX-XXXX" />
            <FormField label="Assunto" name="subject" placeholder="Sobre o que gostaria de falar?" required />
            <FormField label="Mensagem" name="message" placeholder="Digite sua mensagem aqui..." required type="textarea" />
            <div>
              <button
                type="submit"
                className="w-full bg-ccmov-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ccmov-blue"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

