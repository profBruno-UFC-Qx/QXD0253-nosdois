import { authService, obterMensagemErroAuth } from '../../../service/authService';
import { ROTAS } from '../../../service/guarda';

const formCadastro = document.getElementById('form-cadastro') as HTMLFormElement;
const campoUsuario = document.getElementById('campo-usuario') as HTMLInputElement;
const campoEmail = document.getElementById('campo-email') as HTMLInputElement;
const campoSenha = document.getElementById('campo-senha') as HTMLInputElement;
const campoConfirmarSenha = document.getElementById('campo-confirmar-senha') as HTMLInputElement;
const btnToggleSenha = document.getElementById('btn-toggle-senha') as HTMLButtonElement;
const btnSubmit = document.getElementById('btn-submit') as HTMLButtonElement;
const alerta = document.getElementById('alerta-feedback') as HTMLElement;

const exibirAlerta = (mensagem: string, tipo: 'erro' | 'sucesso'): void => {
  alerta.textContent = mensagem;
  alerta.className = `alert-box alert-${tipo === 'sucesso' ? 'success' : 'error'}`;
  alerta.classList.remove('hidden');
}

const ocultarAlerta = (): void => {
  alerta.classList.add('hidden');
}

btnToggleSenha?.addEventListener('click', () => {
  const tipoAtual = campoSenha.getAttribute('type');
  const novoTipo = tipoAtual === 'password' ? 'text' : 'password';
  campoSenha.setAttribute('type', novoTipo);

  const icone = btnToggleSenha.querySelector('svg');
  if (icone) {
    icone.innerHTML =
      novoTipo === 'text'
        ? `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      `
        : `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      `;
  }
});

formCadastro?.addEventListener('submit', async (e) => {
  e.preventDefault();
  ocultarAlerta();

  const username = campoUsuario.value.trim();
  const email = campoEmail.value.trim();
  const password = campoSenha.value;
  const confirmPassword = campoConfirmarSenha.value;

  if (!username || !email || !password || !confirmPassword) {
    exibirAlerta('Por favor, preencha todos os campos obrigatórios.', 'erro');
    return;
  }

  if (username.length < 3) {
    exibirAlerta('O nome de usuário deve ter pelo menos 3 caracteres.', 'erro');
    campoUsuario.focus();
    return;
  }

  if (email.length < 6 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    exibirAlerta('Por favor, informe um endereço de e-mail válido.', 'erro');
    campoEmail.focus();
    return;
  }

  if (password.length < 6) {
    exibirAlerta('A senha deve conter no mínimo 6 caracteres.', 'erro');
    campoSenha.focus();
    return;
  }

  if (password !== confirmPassword) {
    exibirAlerta('As senhas não coincidem. Digite novamente.', 'erro');
    campoConfirmarSenha.focus();
    return;
  }

  btnSubmit.disabled = true;
  const textoOriginal = btnSubmit.innerHTML;
  btnSubmit.innerHTML = '<span>Criando conta...</span>';

  try {
    await authService.cadastro(username, email, password);
    exibirAlerta('Conta criada com sucesso! Redirecionando...', 'sucesso');

    setTimeout(() => {
      window.location.href = ROTAS.animais;
    }, 800);
  } catch (error: unknown) {
    console.error('Erro de cadastro:', error);
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = textoOriginal;
    exibirAlerta(obterMensagemErroAuth(error, 'cadastro'), 'erro');
  }
});
