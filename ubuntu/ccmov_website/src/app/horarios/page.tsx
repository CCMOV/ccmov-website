<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grade de Aulas - CCMOV</title>
  <style>
    :root {
      --cinza: #777;
      --fundo: #f7f7f7;
      --primaria: #333;
      --borda: #ccc;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: var(--fundo);
      padding: 1rem;
      color: var(--primaria);
    }
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }
    .dia {
      background-color: white;
      border: 1px solid var(--borda);
      border-radius: 10px;
      padding: 1rem;
      width: 100%;
      max-width: 300px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    .dia h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    ul {
      list-style: none;
    }
    li {
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
    }
    .descricao {
      color: var(--cinza);
      font-size: 0.85rem;
      margin-left: 4px;
    }
    @media (max-width: 600px) {
      .dia {
        width: 100%;
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <h1>Grade de Aulas</h1>
  <div class="container">
    <div class="dia">
      <h2>Segunda</h2>
      <ul>
        <li>07:00 Pilates</li>
        <li>08:00 Pilates</li>
        <li>09:00 Pilates</li>
        <li>10:00 Pilates</li>
        <li>17:00 Pilates <span class="descricao">Dança de Salão (Iniciado)</span></li>
        <li>18:00 Pilates <span class="descricao">Tango (Iniciante), Dança do Ventre (Iniciante)</span></li>
        <li>19:00 Pilates <span class="descricao">Sertanejo (Iniciante), Dança do Ventre (Básico I)</span></li>
        <li>20:00 Pilates <span class="descricao">Zouk (Iniciante)</span></li>
      </ul>
    </div>
    <div class="dia">
      <h2>Terça</h2>
      <ul>
        <li>07:00 Pilates</li>
        <li>08:00 Pilates</li>
        <li>09:00 Pilates</li>
        <li>10:00 Pilates</li>
        <li>17:00 Pilates <span class="descricao">Dança de Salão (Iniciante)</span></li>
        <li>18:00 Pilates <span class="descricao">Salsa (Iniciante), Dança do Ventre (Iniciante)</span></li>
        <li>19:00 Pilates <span class="descricao">Bachata (Iniciado), Dança do Ventre (Básico I), Zumba</span></li>
        <li>20:00 Pilates <span class="descricao">Tango (Iniciante)</span></li>
        <li><span class="descricao">21:00 Vals e Milonga (Iniciante)</span></li>
      </ul>
    </div>
    <div class="dia">
      <h2>Quarta</h2>
      <ul>
        <li>07:00 Pilates</li>
        <li>08:00 Pilates</li>
        <li>09:00 Pilates</li>
        <li>10:00 Pilates</li>
        <li>17:00 Pilates</li>
        <li>18:00 Pilates <span class="descricao">Forró (Iniciante), Ballet (Infantil)</span></li>
        <li>19:00 Pilates <span class="descricao">Samba de Gafieira (Iniciado)</span></li>
        <li>20:00 Pilates <span class="descricao">Bolero (Intermediário)</span></li>
        <li><span class="descricao">21:00 Tango (Intermediário)</span></li>
      </ul>
    </div>
    <div class="dia">
      <h2>Quinta</h2>
      <ul>
        <li>07:00 Pilates</li>
        <li>08:00 Pilates</li>
        <li>09:00 Pilates</li>
        <li>10:00 Pilates</li>
        <li>17:00 Pilates <span class="descricao">Bachata e Forró (Iniciado)</span></li>
        <li>18:00 Pilates <span class="descricao">Bolero (Intermediário)</span></li>
        <li>19:00 Pilates <span class="descricao">Samba (Iniciante)</span></li>
        <li>20:00 Pilates</li>
      </ul>
    </div>
    <div class="dia">
      <h2>Sexta</h2>
      <ul>
        <li>07:00 Pilates</li>
        <li>08:00 Pilates</li>
        <li>09:00 Pilates</li>
        <li>10:00 Pilates</li>
        <li>17:00 Pilates</li>
        <li>18:00 Pilates</li>
        <li>19:00 Pilates</li>
        <li>20:00 Pilates</li>
      </ul>
    </div>
    <div class="dia">
      <h2>Sábado</h2>
      <ul>
        <li><span class="descricao">13:00 Samba de Gafieira (Iniciante)</span></li>
        <li><span class="descricao">14:00 Zouk e Forró (Iniciante)</span></li>
      </ul>
    </div>
  </div>
</body>
</html>
