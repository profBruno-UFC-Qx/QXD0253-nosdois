import { authService } from './authService';

const formLogin = document.getElementById('form-login') as HTMLFormElement;
const campoIdentificador = document.getElementById('campo-identificador') as HTMLInputElement;
const campoSenha = document.getElementById('campo-senha') as HTMLInputElement;
const btnToggleSenha = document.getElementById('btn-toggle-senha') as HTMLButtonElement;
const btnSubmit = document.getElementById('btn-submit') as HTMLButtonElement;
const alerta = document.getElementById('alerta-feedback') as HTMLElement;

function exibirAlerta(mensagem: string, tipo: 'erro' | 'sucesso') {
  alerta.textContent = mensagem;
  alerta.className = `alert-box alert-${tipo === 'sucesso' ? 'success' : 'error'}`;
  alerta.classList.remove('hidden');
}

function ocultarAlerta() {
  alerta.classList.add('hidden');
}

// Alternar visualização da senha
btnToggleSenha?.addEventListener('click', () => {
  const tipoAtual = campoSenha.getAttribute('type');
  const novoTipo = tipoAtual === 'password' ? 'text' : 'password';
  campoSenha.setAttribute('type', novoTipo);

  const icone = btnToggleSenha.querySelector('svg');
  if (icone) {
    if (novoTipo === 'text') {
      icone.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      `;
    } else {
      icone.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      `;
    }
  }
});

// Envio do Formulário de Login
formLogin?.addEventListener('submit', async (e) => {
  e.preventDefault();
  ocultarAlerta();

  const identifier = campoIdentificador.value.trim();
  const password = campoSenha.value;

  if (!identifier || !password) {
    exibirAlerta('Por favor, preencha todos os campos.', 'erro');
    return;
  }

  // Feedback visual de carregamento
  btnSubmit.disabled = true;
  const textoOriginal = btnSubmit.innerHTML;
  btnSubmit.innerHTML = '<span>Entrando...</span>';

  try {
    await authService.login(identifier, password);
    exibirAlerta('Login efetuado com sucesso! Entrando...', 'sucesso');

    setTimeout(() => {
      window.location.href = '/src/pages/animais/animais.html';
    }, 800);
  } catch (error: any) {
    console.error('Erro de autenticação:', error);
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = textoOriginal;

    const mensagemErro =
      error.response?.data?.error?.message === 'Invalid identifier or password'
        ? 'Usuário/e-mail ou senha inválidos.'
        : 'Não foi possível conectar ao servidor. Verifique se o backend está em execução.';

    exibirAlerta(mensagemErro, 'erro');
  }
});
