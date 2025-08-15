# Goal Control Client

Goal Control Client é uma aplicação web moderna para gerenciamento de metas, construída com React e tecnologias de ponta. O projeto oferece uma interface intuitiva para criação, acompanhamento e controle de objetivos pessoais ou profissionais.

## ✨ Principais Funcionalidades

- Cadastro, edição e exclusão de metas (goals)
- Visualização do progresso de cada meta
- Interface responsiva e amigável
- Integração com backend via API REST
- Feedback visual com notificações (Toaster)
- Validação de formulários e feedback de erros

## 🛠️ Stack e Tecnologias Utilizadas

- **React 18** — Biblioteca principal para construção da interface
- **TypeScript** — Tipagem estática para maior robustez
- **Vite** — Ferramenta de build e desenvolvimento rápido
- **React Router DOM** — Gerenciamento de rotas SPA
- **@tanstack/react-query** — Gerenciamento de dados assíncronos e cache
- **React Hook Form** — Manipulação de formulários
- **Zod** — Validação de schemas
- **Radix UI** — Componentes acessíveis e estilizados
- **Tailwind CSS** — Utilitários para estilização rápida
- **Sonner** — Sistema de notificações
- **Day.js** — Manipulação de datas
- **Universal Cookie** — Gerenciamento de cookies
- **Orval** — Geração de hooks a partir de OpenAPI (se utilizado)
- **ESLint/Biome** — Linting e formatação de código

## 📁 Estrutura de Pastas

```
src/
├── main.tsx           # Ponto de entrada da aplicação React
├── router.tsx         # Definição das rotas da aplicação
├── index.css          # Estilos globais (Tailwind)
├── components/        # Componentes reutilizáveis da UI
├── pages/             # Páginas principais da aplicação
├── hooks/             # Hooks customizados
├── services/          # Serviços de integração com API
├── utils/             # Funções utilitárias
└── ...                # Outros arquivos relevantes
```

- **main.tsx**: Inicializa o React, providers globais e renderiza a aplicação.
- **router.tsx**: Define as rotas e navegação SPA.
- **components/**: Botões, formulários, modais, etc.
- **pages/**: Telas principais (ex: Dashboard, Login, etc).
- **services/**: Comunicação com APIs externas.
- **hooks/**: Hooks customizados para lógica reutilizável.
- **utils/**: Funções auxiliares.

## 🚀 Instalação e Execução Local

### Pré-requisitos

- Node.js (>= 18)
- npm (>= 9) ou yarn

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/goal-control-client.git
   cd goal-control-client
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuração de variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz, se necessário, e configure as variáveis conforme o backend exige (exemplo: `VITE_API_URL`).

4. **(Opcional) Gere hooks a partir do OpenAPI:**

   ```bash
   npm run dev:orval
   ```

5. **Execute a aplicação em modo desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Migrações

- Este projeto é apenas o frontend. Migrações de banco de dados devem ser executadas no backend correspondente.

## 🧪 Testes

> _No momento, não há testes automatizados configurados. Recomenda-se utilizar ferramentas como Jest e React Testing Library para implementar testes unitários e de integração._

## 📚 Exemplos de Uso

### Exemplo de uso de endpoint (via serviço)

```typescript
import { useQuery } from "@tanstack/react-query";
import { getGoals } from "./services/goals";

function GoalsList() {
  const { data, isLoading } = useQuery(["goals"], getGoals);
  // ...renderização
}
```

### Exemplo de formulário com validação

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { goalSchema } from "../schemas/goal";

const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(goalSchema),
});
```

## 💡 Boas Práticas e Recomendações

- Utilize componentes reutilizáveis e mantenha a lógica desacoplada.
- Prefira hooks customizados para lógica compartilhada.
- Siga o padrão de pastas sugerido para facilitar a manutenção.
- Utilize o ESLint/Biome para manter a qualidade do código.
- Documente novos componentes e serviços.
- Para contribuir, abra issues ou pull requests detalhados.

---

> **Dúvidas ou sugestões?** Abra uma issue no repositório ou entre em contato com os mantenedores.

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>
