# 💊 FarmaciaFront

Este projeto é o frontend da aplicação de gerenciamento de farmácia, desenvolvido com **React**, **TypeScript** e **Vite**. Ele se conecta ao backend [CRUD-Farmacia](https://github.com/Isabela-prog/CRUD-Farmacia) para realizar operações de CRUD em produtos e categorias farmacêuticas.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Axios
- React Router
- ESLint

## 📁 Estrutura do Projeto

```
FarmaciaFront/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Isabela-prog/FarmaciaFront.git
cd FarmaciaFront
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure a URL da API

No arquivo `src/services/api.ts`, defina a URL base do backend:

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Substitua pela URL do seu backend
});

export default api;
```

### 4. Inicie a aplicação

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 🔗 Integração com o Backend

Certifique-se de que o backend [CRUD-Farmacia](https://github.com/Isabela-prog/CRUD-Farmacia) esteja em execução na porta `8080` para que o frontend possa se comunicar corretamente com a API.

## 📝 Licença
Projeto realizado por Isabela Santos
