
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Não foi possível encontrar o elemento root no DOM.");
}

// Captura de erros global para ajudar no deploy
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Erro detectado na aplicação:", message, "em", source, ":", lineno);
};

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  console.error("Falha crítica na renderização:", err);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: #ef4444; font-family: sans-serif; text-align: center; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #050505;">
      <h1 style="font-size: 24px; margin-bottom: 10px;">Erro de Carregamento</h1>
      <p style="font-size: 14px; opacity: 0.8;">Ocorreu uma falha na inicialização do Conselho.</p>
      <p style="font-size: 12px; margin-top: 20px; color: #666;">Verifique o console para mais detalhes.</p>
    </div>
  `;
}
