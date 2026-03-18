- Eric Segawa Montagner - RM558224
- Joao Victor Oliveira dos Santos - RM557948
- Matheus Alcântara Estevão - RM558193
- Nicolle Pellegrino Jelinski - RM558610
- Pedro Pereira dos Santos - RM552047

# Protótipo: Tela de Login (Frontend)
Ideia principal
Protótipo de uma tela de login móvel construída em React Native (Expo) com foco apenas no frontend. 
A tela usa apenas elementos básicos para demonstrar layout e interação visual: 
- Text
- TextInput
- Button (componente customizado)
- Image
- Switch.
Objetivo: servir como base visual para integrar autenticação posteriormente.

# Visão geral
- Campos controlados para email e senha.
- Toggle “Mostrar senha” que alterna visibilidade do campo de senha.
- Botões visuais (componente customizado em Button.tsx) sem lógica de backend.
- Imagem de topo (banner.jpg) com wrapper para sombra multiplataforma.
- Projeto preparado para iOS e Android.
- Requisitos funcionais (mínimos do protótipo)
- Exibir formulário de login com:
- Campo Email (texto, teclado email).
- Campo Senha (secureTextEntry por padrão).
- Toggle “Mostrar senha” que permite ver/ocultar caracteres digitados.
- Botão “Entrar” (visual; sem autenticação).
- Link/ação visual “Esqueci a Senha” (visual).
- O componente de botão deve ser reutilizável e importável de Button.tsx.
- Layout responsivo com largura máxima (maxWidth) para telas maiores.
- Imagem de topo envolvida para aplicar sombra (iOS shadow*, Android elevation).

# Arquivos principais do protótipo
- App.tsx — tela principal (formulário, estado e layout).
- Button.tsx — componente de botão visual reutilizável.
- banner.jpg — imagem de topo.

# Preview 
<img width="244" height="544" alt="image" src="https://github.com/user-attachments/assets/4dde6af7-05f6-4aef-83ed-bc983d67defb" />

