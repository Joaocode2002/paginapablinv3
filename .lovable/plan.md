O problema de "tela branca" ocorre porque o projeto está configurado para o Cloudflare (SSR), mas você está tentando hospedar apenas os arquivos estáticos no GitHub Pages. Como o GitHub Pages não executa o servidor necessário para o TanStack Start (SSR), a aplicação não inicializa corretamente.

Vou converter o projeto para uma aplicação React estática tradicional (SPA), que é o formato compatível com o GitHub Pages.

### Alterações Técnicas:
1.  **Vite Config:** Ajustar para usar o plugin React padrão e configurar o caminho base (se necessário, embora para domínio próprio o `/` seja o ideal).
2.  **Entry Point:** Criar um arquivo `src/main.tsx` como ponto de entrada padrão do React.
3.  **Index HTML:** Mover e ajustar o `index.html` para a raiz do projeto e apontar para o novo entry point.
4.  **Router:** Adaptar a inicialização do roteador para funcionar no lado do cliente (SPA).
5.  **Dependências:** Adicionar/ajustar dependências necessárias para o modo SPA.

Isso garantirá que, ao fazer o push para o GitHub, o Workflow gere uma pasta `dist` com arquivos HTML/JS/CSS puros que o GitHub Pages consegue servir.

---
**Nota técnica:** Removendo dependências e configurações específicas de SSR/Cloudflare que estão causando o conflito no GitHub Pages.