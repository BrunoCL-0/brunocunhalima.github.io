# Portifolio

Portfólio pessoal de Bruno Cunha Lima, construído com Astro e preparado para GitHub Pages.

## Princípios

- Conteúdo autêntico, sem inventar experiências ou métricas.
- Versões em português e inglês.
- Arquitetura simples, estática e fácil de manter.
- Projetos técnicos como parte central da narrativa.

## Desenvolvimento

Para editar o projeto em outro computador depois de clonar o repositório, é necessário ter Node.js instalado. O projeto usa a versão indicada em [.nvmrc](./.nvmrc).

### Setup rápido no Ubuntu

```bash
./scripts/setup-ubuntu.sh
```

Depois:

```bash
npm run dev
```

### Setup manual

```bash
nvm install
nvm use
npm ci
npm run dev
```

Se você ainda não tiver `nvm` instalado:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Feche e reabra o terminal, depois rode:

```bash
nvm install
nvm use
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build gera o site estático na pasta `dist/`.

## Publicação

O objetivo é publicar pelo GitHub Pages. Visitantes do site não precisam instalar nada; eles acessam apenas o link público gerado pelo GitHub Pages.

Quem quiser editar o projeto deve clonar o repositório e rodar o setup acima uma vez.

## Estrutura

```text
src/
├── components/
├── content/
├── i18n/
├── layouts/
├── pages/
│   ├── en/
│   └── pt/
└── styles/
```
