# Landing Page - Thiago Miranda

Este projeto é uma landing page estática desenvolvida para ser leve, responsiva e de fácil manutenção, pronta para deploy em ambientes cPanel (HostGator).

## 📂 Estrutura de Pastas
- `/`: Raiz contendo o HTML principal e arquivos de SEO.
- `/assets/css/`: Estilos CSS (Mobile-first, Variáveis CSS).
- `/assets/js/`: Scripts JS puros (Vanilla JS).
- `/assets/img/`: Imagens e ícones (Atualmente com placeholders).
- `/assets/pdf/`: Documentos para download (ex: Currículo).

## 🚀 Como Rodar Localmente
1. **Opção Simples:** Basta abrir o arquivo `index.html` em qualquer navegador moderno.
2. **Opção Dev:** Se preferir um servidor local para evitar problemas de CORS ou caminhos, use a extensão "Live Server" no VS Code ou rode `npx serve .` na raiz do projeto.

## 📥 Como Publicar via cPanel (HostGator)
1. Acesse o **cPanel** da sua conta HostGator.
2. Vá em **Gerenciador de Arquivos (File Manager)**.
3. Entre na pasta `public_html`.
4. Faça o upload de todos os arquivos e pastas deste projeto para dentro de `public_html`.
5. Certifique-se de que o arquivo `index.html` está na raiz da `public_html`.

## ✅ Como Validar
1. **Navegação:** Clique nos itens do menu para testar o scroll suave até as seções.
2. **Responsividade:** Redimensione o navegador ou use o "Inspect element" (F12) para validar a visualização em dispositivos móveis.
3. **Formulário:** Tente enviar o formulário de contato para validar as mensagens de erro/sucesso (validação client-side).
4. **Links:** Verifique se os placeholders `SUBSTITUIR_AQUI` foram preenchidos corretamente (LinkedIn, PDF do Currículo, Link de Agenda).

---
*Desenvolvido com foco em performance e conversão.*
