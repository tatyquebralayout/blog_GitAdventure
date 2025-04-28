# Blog Astro com Foco em Performance e SEO

Este é um template de blog Astro v3+ projetado para performance e SEO, usando:
*   **TypeScript** para segurança de tipos.
*   **Tailwind CSS** para estilização rápida.
*   **Schema de SEO** da documentação do Astro para melhor visibilidade.

| Data       | Título                                                         | Descrição                                                                                                                            | Tags                                      |
| :--------- | :------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |

## 📚 Posts Publicados

| Data | Título | Descrição | Tags |
|------|--------|-----------|------|
| 15/05/2023 | [Getting Started with Astro: Building Static Sites with Speed](/src/content/blog/first-post.md) | Aprenda como o Astro ajuda desenvolvedores a construir websites ultra-rápidos com uma experiência moderna de desenvolvimento. | `astro`, `web development`, `tutorial` |
| 07/06/2023 | [Optimizing Images for the Web: Best Practices for Developers](/src/content/blog/second-post.md) | Aprenda como otimizar imagens para tempos de carregamento mais rápidos, melhor experiência do usuário e melhores rankings de SEO. | `web development`, `performance`, `images` |
| 22/07/2023 | [Building a Minimalist Digital Workspace](/src/content/blog/third-post.md) | Como criar um ambiente digital livre de distrações que promove foco e produtividade. | `productivity`, `technology`, `minimalism` |

## 🔧 Estrutura do Projeto

```
blog_gitadventure/
├── .astro/          # Arquivos gerados pelo Astro
├── public/          # Arquivos estáticos (não processados)
├── src/             # Código fonte do projeto
│   ├── assets/      # Imagens e outros arquivos
│   ├── components/  # Componentes reutilizáveis
│   ├── content/     # Conteúdo do blog (Markdown)
│   │   └── blog/    # Posts do blog
│   ├── layouts/     # Layouts para as páginas
│   └── pages/       # Páginas do site (rotas)
├── astro.config.mjs # Configuração do Astro
└── package.json     # Dependências e scripts
```

## 📝 Como Criar um Novo Post

1. Crie um novo arquivo `.md` na pasta `src/content/blog/`
2. Adicione o frontmatter (YAML) ao início do arquivo:

```md
---
title: 'Título do Post'
description: 'Breve descrição sobre o que o post trata'
pubDate: 2023-MM-DDT00:00:00Z  # Data no formato ISO
heroImage: 'URL da imagem de capa'
tags: ['tag1', 'tag2', 'tag3']
---

Conteúdo do post em Markdown...
```

3. Escreva o conteúdo do post usando Markdown
4. Adicione uma linha vazia ao final do arquivo para evitar erros de linting

## 🎨 Padrões de Formatação

### Títulos

- Título principal é definido no frontmatter, não use `# Título` no corpo do texto
- Use `##` para seções principais e `###` para subseções

### Código

Para blocos de código, use três crases e especifique a linguagem:

```md
\```html
<div class="exemplo">
  <p>Seu código aqui</p>
</div>
\```
```

### Imagens

```md
![Texto alternativo](caminho/para/imagem.jpg)
```

### Listas

- Use `-` para listas não ordenadas
- Use `1.`, `2.`, etc. para listas ordenadas

## 🚀 Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Verificar erros de ortografia
npm run spell-check

# Construir o site para produção
npm run build

# Visualizar build de produção localmente
npm run preview
```

## 📋 Checklist de Publicação

- [ ] Verificar ortografia e gramática
- [ ] Garantir que imagens estão otimizadas
- [ ] Confirmar que todos os links funcionam corretamente
- [ ] Verificar formatação em dispositivos móveis
- [ ] Adicionar tags relevantes
- [ ] Incluir linha vazia no final do arquivo
