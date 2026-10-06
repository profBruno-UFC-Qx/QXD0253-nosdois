# :checkered_flag: Fazenda Digital

Aplicação web para auxiliar pequenos produtores rurais na gestão da produção leiteira, substituindo as anotações manuais em cadernos por um registro digital organizado, seguro e acessível.

## :technologist: Membros da equipe

Jean Oliveira dos Santos - 581312 - Engenharia de Software                                                                             
Kauã Bernardino Lima - 582941 - Engenharia de Software

## :bulb: Objetivo Geral
Desenvolver uma solução digital prática para simplificar o controle da produção diária de leite e a gestão do rebanho, facilitando a tomada de decisões do produtor e prevenindo a perda de informações.

## :eyes: Público-Alvo
Pequenos e médios produtores rurais leiteiros (e seus familiares/auxiliares) que necessitam de uma ferramenta simples e acessível para organizar a rotina do rebanho no campo.

## :star2: Impacto Esperado
* **Organização e Segurança:** Eliminação da perda de histórico produtivo provocada pelo uso do papel.
* **Facilidade de Uso:** Interface intuitiva pensada para produtores com pouca familiaridade com tecnologia.
* **Acompanhamento de Desempenho:** Visão clara e rápida da evolução da produção diária de leite para apoiar decisões de manejo e nutrição.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação
1. **Usuário Não Logado (Visitante):**
   * Acesso à tela de apresentação do aplicativo (Landing Page/Tutorial).
   * Telas de cadastro de conta e login.
2. **Produtor / Administrador da Propriedade (Usuário Logado):**
   * Acesso completo a todas as funcionalidades de gestão.
     
## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

**Acessíveis a todos os usuários (Não Logados):**
* Visualização de tutorial inicial de uso e apresentação da plataforma.
* Cadastro de novo produtor/propriedade.
* Login e recuperação de acesso.

**Restritas a usuários logados (Produtor):**
* **Gestão do Rebanho:** Cadastro, listagem, edição e exclusão de animais.
* **Lançamento Diário:** Registro e edição do volume de leite produzido por animal ou por ordenha do dia.
* **Histórico de Produção:** Consulta detalhada da produção diária, semanal ou mensal do rebanho.
* **Ajuste de Dados:** Possibilidade de editar ou excluir registros incorretos do sistema.

## :spiral_calendar: Entidades ou tabelas do sistema

1. **Usuario / Produtor:** guarda as informações da conta do produtor.
2. **Animal:** armazena os dados dos animais do rebanho.
3. **RegistroProducao:** armazena os lançamentos de produção de leite.
