"use client";

import { useState, useEffect } from 'react';
// Header and Footer removed as they are in RootLayout
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Event {
  id?: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  link?: string;
  type?: string; // Adicionado para filtros futuros
}

export default function AdminEventosPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
    imageUrl: '',
    link: '',
    type: '',
  });
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"; // Senha padrão, idealmente de .env.local

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/eventos');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, [name]: value });
    } else {
      setNewEvent({ ...newEvent, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return;

    const eventToSubmit = editingEvent || newEvent;
    const url = editingEvent ? `/api/eventos/${editingEvent.id}` : '/api/eventos';
    const method = editingEvent ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventToSubmit),
      });

      if (response.ok) {
        fetchEvents();
        setNewEvent({ name: '', date: '', time: '', location: '', description: '', imageUrl: '', link: '', type: '' });
        setEditingEvent(null);
      } else {
        const errorData = await response.json();
        alert(`Erro ao salvar evento: ${errorData.message}`);
        console.error("Erro ao salvar evento:", errorData);
      }
    } catch (error) {
      alert("Erro de rede ao salvar evento.");
      console.error("Erro de rede:", error);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
  };

  const handleDelete = async (id?: string) => {
    if (!isAuthenticated || !id) return;
    if (confirm("Tem certeza que deseja excluir este evento?")) {
      try {
        const response = await fetch(`/api/eventos/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchEvents();
        } else {
          alert("Erro ao excluir evento.");
        }
      } catch (error) {
        alert("Erro de rede ao excluir evento.");
      }
    }
  };
  
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Senha incorreta!");
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        {/* Header and Footer removed as they are in RootLayout */}
        <main className="container mx-auto py-8 px-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Acesso Administrativo de Eventos</h1>
          <div className="w-full max-w-xs">
            <Label htmlFor="password">Senha:</Label>
            <Input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mb-4"
            />
            <Button onClick={handleLogin} className="w-full">Entrar</Button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      {/* Header and Footer removed as they are in RootLayout */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Gerenciar Eventos</h1>
        <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-4">{editingEvent ? 'Editar Evento' : 'Adicionar Novo Evento'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="name">Nome do Evento</Label>
              <Input type="text" name="name" id="name" value={editingEvent ? editingEvent.name : newEvent.name} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="date">Data</Label>
              <Input type="date" name="date" id="date" value={editingEvent ? editingEvent.date : newEvent.date} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="time">Horário</Label>
              <Input type="text" name="time" id="time" placeholder="Ex: 14:00 - 16:00" value={editingEvent ? editingEvent.time : newEvent.time} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="location">Local</Label>
              <Input type="text" name="location" id="location" value={editingEvent ? editingEvent.location : newEvent.location} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="imageUrl">URL da Imagem (opcional)</Label>
              <Input type="text" name="imageUrl" id="imageUrl" value={editingEvent ? editingEvent.imageUrl : newEvent.imageUrl} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="link">Link para Inscrição/Mais Informações (opcional)</Label>
              <Input type="text" name="link" id="link" value={editingEvent ? editingEvent.link : newEvent.link} onChange={handleInputChange} />
            </div>
             <div>
              <Label htmlFor="type">Tipo de Evento (para filtro, opcional)</Label>
              <Input type="text" name="type" id="type" placeholder="Ex: Aula Especial, Workshop" value={editingEvent ? editingEvent.type : newEvent.type} onChange={handleInputChange} />
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="description">Descrição</Label>
            <Textarea name="description" id="description" value={editingEvent ? editingEvent.description : newEvent.description} onChange={handleInputChange} required />
          </div>
          <Button type="submit">{editingEvent ? 'Salvar Alterações' : 'Adicionar Evento'}</Button>
          {editingEvent && (
            <Button type="button" variant="outline" onClick={() => setEditingEvent(null)} className="ml-2">
              Cancelar Edição
            </Button>
          )}
        </form>

        <h2 className="text-2xl font-semibold mb-4">Eventos Cadastrados</h2>
        <div className="space-y-4">
          {events.length > 0 ? events.map(event => (
            <div key={event.id} className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p>{new Date(event.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - {event.time}</p>
                <p>{event.location}</p>
                <p className="text-sm text-gray-600 truncate max-w-md">{event.description}</p>
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <Button variant="outline" size="sm" onClick={() => handleEdit(event)}>Editar</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(event.id)}>Excluir</Button>
              </div>
            </div>
          )) : <p>Nenhum evento cadastrado.</p>}
        </div>
      </main>
    </>
  );
}

