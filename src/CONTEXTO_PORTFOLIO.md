# Contexto do portfolio

Este arquivo resume como o portfolio atual foi montado e como manter o projeto antes de criar branches para portfolios de outras pessoas.

## Objetivo

Portfolio pessoal de Bruno Cunha Lima, feito em Astro, com versoes em portugues e ingles. O site mostra projetos de robotica, experiencia, publicacoes, competencias, formacao e contatos.

## Estrutura principal

- `src/content/profile.ts`: dados pessoais, hero, areas de foco e formacao.
- `src/content/projects.ts`: projetos em destaque, textos dos estudos de caso, tags e midias.
- `src/content/experience.ts`: experiencias profissionais, monitoria, equipes e atividades extracurriculares.
- `src/content/publications.ts`: publicacoes academicas.
- `src/content/skills.ts`: grupos de competencias tecnicas.
- `src/content/contact.ts`: links e contatos publicos.
- `src/components/HomePage.astro`: pagina inicial, secoes, carrosseis de midia e conteudo geral.
- `src/components/Header.astro`: menu superior, troca de idioma e destaque automatico da secao ativa ao rolar a pagina.
- `src/components/ContactLinks.astro`: cards de contato.
- `src/pages/pt/index.astro` e `src/pages/en/index.astro`: entradas das paginas inicial PT/EN.
- `src/pages/pt/projects/[slug].astro` e `src/pages/en/projects/[slug].astro`: paginas de estudo de caso dos projetos.
- `src/assets/`: imagens e videos usados no site.
- `src/styles/global.css`: estilo global do site.
- `.github/workflows/deploy.yml`: deploy automatico no GitHub Pages quando ha push na `main`.

## Como editar conteudo

Para mudar textos da pagina inicial, geralmente editar:

- Hero, nome, resumo, formacao: `src/content/profile.ts`.
- Projetos, tags, resumo, contribuicoes e midias: `src/content/projects.ts`.
- Experiencias e monitoria: `src/content/experience.ts`.
- Publicacoes: `src/content/publications.ts`.
- Competencias: `src/content/skills.ts`.

O site usa objetos com `pt` e `en`. Quando mudar um texto importante, manter as duas linguas coerentes.

## Como adicionar ou alterar midias

1. Colocar a imagem ou video em `src/assets/`.
2. Importar o arquivo em `src/components/HomePage.astro` quando ele precisa aparecer na pagina inicial.
3. Adicionar o nome do arquivo no mapa `projectImages` ou `projectVideos`.
4. Referenciar o arquivo em `src/content/projects.ts`, usando `image`, `video`, `extraImages` ou `extraVideos`.

Os cards de projetos ja suportam carrossel de imagem e video. Quando ha mais de uma midia, aparecem setas e contador no formato `1/3`, `2/3`, etc.

## Projetos em destaque atuais

- `turtlebot2i-ros2-retrofit`: retrofit do TurtleBot2i para ROS 2, com midia do robo fisico e navegacao Nav2.
- `agv-mobile-manipulation`: AGV com Scout, UR7 e manipulador soft, usando a composicao atual `agv-manipulation-concept.png`.
- `soft-climber-pipe-robot`: projeto do TCC sobre robo escalador de dutos com manipuladores flexiveis acionados por tendao. Inclui recortes do artigo publicado no CBA.
- `rgbd-lidar-slam-analysis`: analise RGB-D vs LiDAR em SLAM 2D, com midia de simulacao e deteccao YOLO.

## Ajustes importantes ja feitos

- Removidos textos temporarios do tipo `Next details` e `TODO`.
- Formacao ajustada para `2022 - PRESENT`.
- Monitoria ajustada para mostrar periodo anterior e periodo atual.
- Menu superior passa a atualizar automaticamente a secao ativa durante scroll manual.
- Carrosseis dos projetos mostram contador de midias.
- Projeto AGV usa composicao com Scout, UR7 e soft robot.
- Evento H2 usa imagem composta com time e trofeu.
- Projeto Soft Climber foi adicionado com conteudo baseado no artigo do CBA e no TCC.
- GitHub Pages publica automaticamente a branch `main`.

## Rodar localmente

Instalar dependencias:

```bash
npm install
```

Rodar em modo desenvolvimento:

```bash
npm run dev
```

Verificar build antes de publicar:

```bash
npm run build
```

## Publicacao atual

Hoje o deploy do portfolio do Bruno esta configurado pelo GitHub Pages na branch `main`.

Fluxo atual:

```bash
git add .
git commit -m "Mensagem da alteracao"
git push origin main
```

Depois do push, o GitHub Actions roda o build e publica em GitHub Pages.

## Estrategia para portfolios de outras pessoas

A ideia preferida e usar uma branch por pessoa no mesmo repositorio, sem precisar criar varios repositorios.

Exemplo:

- `main`: portfolio do Bruno.
- `portfolio-maria`: portfolio da Maria.
- `portfolio-joao`: portfolio do Joao.

Cada branch pode ser conectada como um site separado no Vercel ou Netlify. Assim, cada pessoa recebe um link publico proprio, mas o codigo continua centralizado no mesmo repositorio.

Fluxo esperado para um novo portfolio:

```bash
git checkout main
git pull
git checkout -b portfolio-nome-da-pessoa
```

Depois disso, editar textos, imagens e projetos nessa branch. O deploy do Vercel/Netlify deve apontar para essa branch especifica.

## Cuidados ao usar uma branch por pessoa

- Sempre conferir a branch antes de editar:

```bash
git branch --show-current
```

- Fazer push para a branch correta:

```bash
git push origin portfolio-nome-da-pessoa
```

- Melhorias feitas na `main` nao entram automaticamente nas branches de outras pessoas. Se uma melhoria do template for util para todos, sera necessario copiar ou fazer merge com cuidado.
- Antes de alterar o portfolio do Bruno, voltar para `main`.

## Recomendacao pratica

Nao precisa mover o portfolio atual para uma pasta como `src/meu_portifolio`. O Astro ja espera a estrutura atual em `src/components`, `src/content`, `src/pages`, `src/assets` e `src/styles`. A separacao por branch e suficiente para manter portfolios diferentes no mesmo repositorio.
