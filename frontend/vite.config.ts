import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        login: fileURLToPath(
          new URL('./src/pages/usuario/login-cadastro/login.html', import.meta.url),
        ),
        cadastro: fileURLToPath(
          new URL('./src/pages/usuario/login-cadastro/cadastro.html', import.meta.url),
        ),
        animais: fileURLToPath(
          new URL('./src/pages/animais/animais.html', import.meta.url),
        ),
        producao: fileURLToPath(
          new URL('./src/pages/producao/producao.html', import.meta.url),
        ),
        historico: fileURLToPath(
          new URL('./src/pages/historico/historico.html', import.meta.url),
        ),
      },
    },
  },
});

