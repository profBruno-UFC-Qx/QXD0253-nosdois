Roteiro de Entrevista
'
Objetivo do Documento: Este roteiro tem como finalidade orientar a condução da entrevista inicial com o
cliente da fazenda. As perguntas visam extrair o contexto operacional, identificar os principais gargalos e
entender as necessidades relativas ao acompanhamento dos animais, controle da produção de leite e gestão
financeira de custos.
1. Guia do Entrevistador
2. Blocos de Perguntas para a Entrevista
Bloco 1: Contexto Geral e Perfil da Propriedade
Objetivo: Entender a dimensão do negócio, infraestrutura técnica e perfil dos usuários do sistema.
Resposta do cliente: Atualmente, 40 cabeças, Contendo vacas, bezerros, garrotes e novilhos. Voltado para a
produção de leite. O total é 108 hectares mas explorada mesmo são só 36 hectares.
Resposta do cliente: O proprietário, é familiarizado.
Resposta do cliente: Na fazenda mesmo. Sim. Não, hoje em dia todo canto tem internet
Bloco 2: Gestão e Acompanhamento do Rebanho
Objetivo: Mapear o ciclo de vida do animal e os controles individuais ou em grupo.
Resposta do cliente: Por nome, pois são poucas vacas, mas estou adaptando para o brinco.
Formato: Entrevista semiestruturada. •
Foco: Entender o processo atual do cliente (como ele resolve os problemas hoje) e não apenas a interface
desejada.
•
Resultado Esperado: Substrato completo para formulação de metas mensuráveis, requisitos
funcionais/não funcionais e histórias de usuário.
•
Visão Geral do Rebanho: Quantas cabeças de gado a fazenda possui atualmente? Qual é o foco da
produção (leite, corte ou sistema misto)? Qual o tamanho da área manejada?
1.
Perfil dos Operadores: Quem utilizará o aplicativo desktop no dia a dia (ex: proprietário, gerente de
campo, administrativo, contador, vaqueiros)? Qual é o nível de familiaridade desses usuários com
computadores e softwares?
1.
Infraestrutura Técnica: O computador em que o aplicativo rodará fica localizado na fazenda ou no
escritório da cidade? Há disponibilidade de internet estável no local de uso? É necessário funcionamento
offline?
1.
Identificação dos Animais: Como os animais são identificados e rastreados hoje (ex: brinco visual, chip
RFID, tatuagem, nome, número de registro)?
1.
1. Registro de Eventos: Quais eventos do animal são essenciais de serem registrados no aplicativo?
Nascimentos, origens e genealogia
Resposta do cliente: Todos são importantes mas o mais importantes mesmo são a parte reprodutiva e os
nascimentos dos bezerros
Resposta do cliente: Pequenos pastos. semiconfinado, pela manhã é solto na roça e de tarde da a ração.
Bloco 3: Produção e Comercialização de Leite
Objetivo: Mapear os processos de medição e receita gerada pelo leite.
Resposta do cliente: mensalmente, a cada 30 dias. individualmente
Resposta do cliente: venda semanal, 2,15 o litro e o pagamento semanal
Bloco 4: Controle Financeiro e Gastos com Animais
Objetivo: Compreender o fluxo de caixa e a necessidade de apropriação dos custos operacionais.
Resposta do cliente: Mais com ração e mão de obra
Resposta do cliente: Sim, individualmente, pra saber se a vaca está se pagando.
Resposta do cliente: registro feito no caderno
Bloco 5: Gargalos, Relatórios e Expectativas de Sucesso
Objetivo: Mapear dores reais e visões de relatórios essenciais para a tomada de decisão.
Resposta do cliente: no manejo das vacas, tirar leite é rápido. no momento não
• Pesagens e evolução corporal •
Protocolos sanitários (vacinações, exames, vermifugação) •
Eventos reprodutivos (inseminação, cobertura, diagnóstico de gestação, data provável do parto) •
Baixas (vendas, mortes, descartes) •
Manejo e Organização: Os animais são controlados individualmente, organizados em lotes ou divididos
por piquetes/pastos? Como é feita a movimentação entre lotes?
1.
Rotina de Medição: Como e com que frequência é realizada a pesagem/medição do leite (diária por
ordenha, semanal, quinzenal)? A medição é efetuada individualmente por vaca ou por lote/tanque?
1.
Faturamento e Venda: Como funciona o processo de venda do leite? Qual é a frequência de coleta pelo
laticínio e como são calculados os valores (preço base por litro, adicionais por qualidade/gordura/proteína,
descontos)?
1.
Apropriação de Custos Diretos: Quais são os principais custos atrelados ao manejo dos animais (ex:
nutrição/ração, vacinas/medicamentos, serviços veterinários, manutenção de pastagens)?
1.
Nível de Detalhamento Financeiro: Existe a necessidade de saber o custo exato por animal/lote
(custo/cabeça) ou o acompanhamento dos gastos gerais da fazenda é suficiente?
1.
Entradas e Saídas: Como é feito hoje o registro de receitas (venda de leite, descarte de animais, venda de
bezerras) e despesas (compra de insumos, máquinas, folha)? É utilizado caderno, planilha ou outro
sistema?
1.
Pontos Fritantes (Dores Atual): Qual processo atual consome mais tempo ou apresenta a maior taxa de
erros? O que não pode continuar como está?
1.
Relatórios Essenciais: Se você pudesse abrir uma tela hoje e ver 3 relatórios ou gráficos vitais para o seu
negócio, quais seriam?
1.
Resposta do cliente: total de leite diário, do custo, questões reprodutivas, pra saber em qual animal está em
que fase reprodutiva, seria bom também essa ideia do raking.
Exemplos: Curva de lactação do rebanho, ranking de vacas mais produtivas, custo por litro de leite
produzido, balancete financeiro mensal, previsão de partos do mês.
•
Requisitos e Regras de Negócios
Requisitos Funcionais
Identificação Nome Descrição
RF01 Cadastrar O sistema deve permitir o cadastro de animais
RF02 Listar Animais O sistema deve permitir a listagem de animais contendo
Nome, Brinco (opcional), Categoria (Vaca, Bezerro, Garrote,
Novilho) e Sexo.
RF03 Editar Animais O sistema deve permitir atualizar as informações dos
animais
RF04 Inativar Animal O sistema deve permitir alterar o status de "Ativo" para
"inativo" (devido a venda, morte ou descarte).
RF05 Registrar Cobertura e
Previsão de Parto
O sistema deve permitir o registro de
cobertura/inseminação de vacas e calcular
automaticamente a Data Provável do Parto (+283 dias).
RF06 Registrar Parto e Vincular
Bezerro
O sistema deve permitir o registro de nascimento de novos
bezerros, vinculando-os à matriz (mãe) correspondente.
RF07 Medição Mensal de Leite O sistema deve permitir o lançamento mensal da produção
individual de leite (em litros) para cada vaca em lactação.
RF08 Coleta Diária e Venda
Semanal
O sistema deve permitir o registro do volume total diário de
leite produzido na fazenda e os lançamentos de
faturamento das vendas semanais.
RF09 Apropriação de Custos
Diretos
O sistema deve permitir lançar despesas de ração,
medicamentos e mão de obra, atribuindo-as por animal ou
por lote.
RF10 DRE Individual ("A Vaca se
Paga?")
O sistema deve apresentar um painel com o resultado
financeiro individual (Receita - Custos), exibindo alertas
visuais para vacas que apresentam prejuízo.
RF11 Ranking de Produtividade O sistema deve exibir um ranking mensal das vacas mais e
menos produtivas do rebanho para apoio na tomada de
decisão.
Requisitos Não Funcionais
Identificação Nome Descrição
RNF01 Plataforma Desktop O sistema deve ser desenvolvido como uma aplicação
Desktop nativa/executável para o sistema operacional
Windows.
RNF02 Banco de Dados Local O sistema deve utilizar um banco de dados leve e
embarcado armazenado localmente na máquina da
fazenda.
RNF03 Operação 100% Offline O sistema deve ser totalmente funcional sem dependência
de conexão com a internet para todas as suas operações
essenciais.
RNF04 Desempenho e Resposta O carregamento de consultas, listagens e relatórios para a
carga do rebanho deve ser executado em tempo inferior a
5 segundos.
RNF05 Usabilidade Simplificada A interface deve ser simples, limpa e de fácil navegação via
teclado e mouse, adaptada ao perfil de usuário único.
Regras de Negócio
Identificação Nome Descrição
RN01 Cálculo de Gestação A Data Provável do Parto deve ser calculada
automaticamente somando 283 dias à data da
cobertura/inseminação confirmada.
RN02 Vínculo Materno Obrigatório Todo registro de nascimento de bezerro deve estar
obrigatoriamente associado a uma matriz (vaca)
previamente cadastrada.
RN03 Restrição de Lançamento de
Leite
Lançamentos de medições individuais de produção de leite
só são permitidos para animais do sexo feminino com
categoria Vaca.
RN04 Apuração da Viabilidade
Financeira
A margem individual é calculada por ((produção de leite
mensal * preço por litro) - custos alocados) se o valor < 0,
exibir alerta de que o animal não se pagou.
RN05 Unicidade de Identificação Não é permitido cadastrar dois animais ativos com o mesmo
Nome ou com o mesmo Número de Brinco.
User Story
User Story
Identificação Nome User Story Critérios de aceitação Story
Points
Requisitos
vinculados
MoSCoW
US01 Cadastrar
Animal
Como proprietário,
quero cadastrar os
animais da fazenda com
Nome, Brinco, Categoria
(Vaca, Bezerro, Garrote,
Novilho) e Sexo, para
que eu mantenha o
rebanho de 40 cabeças
organizado.
3 RF01 Must
Have
US02 Listar Animais Como proprietário,
quero listar os animais
da fazenda com Nome,
Brinco, Categoria (Vaca,
Bezerro, Garrote, Novilho)
e Sexo, para que eu
mantenha o rebanho de
40 cabeças organizado.
3 RF02 Must
Have
US03 Editar Animal Como proprietário,
quero alterar os dados
de um animal.
3 RF03 Must
Have
US04 Inativar Animal Como proprietário
quero mudar o status de
"Ativo" para "Inativo"
(venda, morte,
descarte), para que a
lista do rebanho exiba
apenas animais ativos.
3 RF04 Must
Have
O sistema deve
permitir o cadastro
de um animal com
os campos:
Nome/Brinco
(obrigatório e único),
Categoria (Vaca,
Novilha, Bezerro,
Touro), Sexo e Data
de Nascimento.
•
O sistema não deve
permitir o cadastro
de dois animais com
o mesmo Nome ou
Número de Brinco.
•
A tela de listagem
deve exibir todos os
animais ativos
cadastrados com
opção de busca
rápida por Nome ou
Brinco.
•
O sistema deve
permitir alterar as
informações
cadastrais de um
animal existente.
•
sistema deve
permitir inativar um
animal mediante a
seleção obrigatória
de um motivo
(Venda, Morte,
Descarte/Descarte
Técnico).
•
Animais inativos não
devem aparecer na
•
U
S
0
5
R
e
gis
t
r
a
r
C
o
b
e
r
t
u
r
a
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
r
e
gis
t
r
a
r
a
d
a
t
a
d
e
c
o
b
e
r
t
u
r
a
/in
s
e
min
a
ç
ã
o
d
e
u
m
a
v
a
c
a
,
p
a
r
a iniciar o
a
c
o
m
p
a
n
h
a
m
e
n
t
o
r
e
p
r
o
d
u
tiv
o
d
o
a
nim
al. 3
R
F
0
5
S
h
o
uld
H
a
v
e
U
S
0
6
P
r
e
vis
ã
o
d
e
P
a
r
t
o
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
vis
u
aliz
a
r
a
D
a
t
a
P
r
o
v
á
v
el d
o
P
a
r
t
o
c
alc
ula
d
a
p
elo
sis
t
e
m
a
,
p
a
r
a
pla
n
ej
a
r
o
m
a
n
ej
o
d
a
v
a
c
a
g
e
s
t
a
n
t
e. 3
R
F
0
6
S
h
o
uld
H
a
v
e
U
S
0
7
R
e
gis
t
r
a
r
P
a
r
t
o
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
r
e
gis
t
r
a
r
a
o
c
o
r
r
ê
n
cia
e
a
d
a
t
a
d
o
p
a
r
t
o
d
e
u
m
a
m
a
t
riz
,
p
a
r
a
a
t
u
aliz
a
r
o
s
t
a
t
u
s
r
e
p
r
o
d
u
tiv
o
d
a
v
a
c
a
n
o
r
e
b
a
n
h
o. 3
R
F
0
7
S
h
o
uld
H
a
v
e
U
S
0
8
Vin
c
ula
r
B
e
z
e
r
r
o
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
c
a
d
a
s
t
r
a
r
o
n
o
v
o
b
e
z
e
r
r
o
n
a
s
cid
o
vin
c
ula
n
d
o
-
o
dir
e
t
a
m
e
n
t
e
à
s
u
a
m
a
t
riz
(
m
ã
e
)
,
p
a
r
a
2
R
F
0
8
S
h
o
uld
H
a
v
e listagem principal por padrão, mas
d
e
v
e
m
s
e
r
m
a
n
tid
o
s
n
o
his
t
ó
ric
o
d
o
b
a
n
c
o
d
e
d
a
d
o
s. Permitir o registro
a
p
e
n
a
s
p
a
r
a
a
nim
ais
d
o
s
e
x
o
f
e
minin
o. • Validar se a fêmea está em idade reprodutiva. • Registrar o tipo do evento (Monta Natural ou Inseminação). • Calcular a Data Provável do Parto somando 283 dias à data da cobertura (RN01). • Exibir a data calculada na ficha individual da vaca. • Exibir o evento no painel de eventos reprodutivos do rebanho. • Permitir registrar o parto apenas a partir de uma cobertura prévia. • Atualizar o status reprodutivo da matriz automaticamente para "Lactante" (RN02). • Registrar a data real do evento de parto. • Tornar obrigatória a seleção da matriz (mãe) no cadastro. • Inserir o novo bezerro automaticamente na •
g
a
r
a
n
tir
a
r
a
s
t
r
e
a
bilid
a
d
e
g
e
n
e
aló
gic
a. US09 Medição Mensal de Leite Como proprietá
rio
,
q
u
e
r
o la
n
ç
a
r
a
m
e
diç
ã
o
m
e
n
s
al d
e lit
r
o
s
d
e leit
e
d
e
c
a
d
a
v
a
c
a
e
m lactação, para que
e
u
a
c
o
m
p
a
n
h
e
o
d
e
s
e
m
p
e
n
h
o in
divid
u
al do rebanho. 8
R
F
0
9
M
u
s
t
H
a
v
e
U
S
1
0
C
ole
t
a
Diá
ria
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
r
e
gis
t
r
a
r
o
t
o
t
al diário de litros de leite depositados no tanque da fazenda, para controlar o volume total produzido. 3
R
F
1
0
M
u
s
t
H
a
v
e
U
S
1
1
V
e
n
d
a
S
e
m
a
n
al C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
r
e
aliz
a
r
o
f
e
c
h
a
m
e
n
t
o
s
e
m
a
n
al d
e
v
e
n
d
a
d
o leit
e
,
p
a
r
a
a
p
u
r
a
r
o
f
a
t
u
r
a
m
e
n
t
o
b
r
u
t
o
d
a
f
a
z
e
n
d
a. 3
R
F
1
1
M
u
s
t
R
a
v
e lista geral do rebanho. Definir a categoria do novo animal como "Bezerro(a)". • O sistema deve permitir o lançamento periódico de medições individuais de leite em litros. • O lançamento de produção de leite só pode ser realizado para vacas fêmeas em lactação. • O sistema não deve aceitar valores zerados ou negativos para a quantidade de litros. • A ficha do animal deve exibir o histórico de todas as medições já cadastradas para ele. • Disponibilizar formulário simples para lançamento diário. • Armazenar o volume em litros (L) depositado no tanque resfriador. • Validar data e impedir duplicidade de lançamento no mesmo dia. • Calcular a Receita Bruta automaticamente (Litro * Preço/L) • Preencher o preço base do litro por padrão com R$ 2,15. •
US12 Apropriação de
Custos Diretos
Como proprietário,
quero lançar despesas
de ração, medicamentos
e mão de obra
atribuindo por animal
ou lote, para que o custo
seja alocado
individualmente.
8 RF12 Should
Have
US13 Dashboard:
DRE Individual
("A Vaca se
Paga?")
Como proprietário,
quero ver o resultado
financeiro individual
(Receita - Custos) de
cada vaca, para que eu
identifique rapidamente
quais animais dão lucro
ou prejuízo.
8 RF13 Could
Have
Permitir a alteração
manual do preço por
litro antes de salvar.
•
O sistema deve
permitir o registro
de despesas e
custos operacionais
da fazenda (ex:
Ração,
Medicamentos, Mão
de obra).
•
O usuário deve ter a
opção de vincular o
custo a um animal
específico ou
selecionar a opção
de rateio geral.
•
Custos gerais
marcados como
rateio devem ser
distribuídos
proporcionalmente
entre todas as vacas
ativas do rebanho.
•
O sistema deve
calcular o resultado
financeiro individual
de cada vaca através
da fórmula: Margem
= (Produção Mensal
de Leite * Preço por
Litro) - Custos
Alocados.
•
Se a margem
financeira do animal
for menor que zero
(< 0), o sistema deve
exibir um alerta/tag
visual em vermelho
indicando "Prejuízo"
ou "Não se Paga".
•
A tela de DRE
individual deve
mostrar o
detalhamento de
receitas, custos
diretos, custos
rateados e a
•
U
S
1
4
D
a
s
h
b
o
a
r
d: Ranking de
P
r
o
d
u
tivid
a
d
e
C
o
m
o
p
r
o
p
rie
t
á
rio
,
q
u
e
r
o
vis
u
aliz
a
r
o
r
a
n
kin
g
d
a
s
v
a
c
a
s
m
ais
e
m
e
n
o
s
p
r
o
d
u
tiv
a
s
d
o
m
ê
s
,
p
a
r
a
q
u
e
e
u
t
o
m
e
d
e
cis
õ
e
s
e
s
t
r
a
t
é
gic
a
s
d
e
m
a
n
ej
o
e
d
e
s
c
a
r
t
e. 5
R
F
1
4
C
o
uld
H
a
v
e
/
m
a
r
g
e
m lí
q
uid
a
fi
n
al do animal. O sistema deve
e
xibir
u
m
a
t
ela
d
e
r
a
n
kin
g
o
r
d
e
n
a
n
d
o
a
s
v
a
c
a
s
d
o
r
e
b
a
n
h
o
d
a
m
ais
p
r
o
d
u
tiv
a
p
a
r
a
a
m
e
n
o
s
p
r
o
d
u
tiv
a
n
o
p
e
r
í
o
d
o
s
ele
cio
n
a
d
o. • O painel deve destacar visualmente as top vacas do rebanho e os animais de menor desempenho. • O painel deve permitir filtrar as informações por mês e por ano. • O tempo de carregamento da tela do ranking e do processamento dos dados não deve ultrapassar 5 segundos. •
Documentação
Equipe:
Para pequenos produtores rurais e pecuaristas leiteiros (como produtores da agricultura familiar),
Que enfrentam dificuldades com a desorganização, perda de dados e falta de praticidade ao controlar o
rebanho e a produção diária de leite em anotações de papel/cadernos,
O Fazenda Digital
É um aplicativo desktop de gestão da produção leiteira e controle do rebanho,
Que permite registrar animais, contabilizar a ordenha diária e consultar o histórico de produção de forma
simples, organizada, segura e acessível mesmo na rotina do campo,
Diferente do controle manual em cadernos de anotação ou de planilhas/sistemas complexos que não
consideram a realidade da zona rural,
O nosso produto oferece uma interface intuitiva e focada na facilidade de uso diário, garantindo segurança da
informação e auxílio prático na tomada de decisões do produtor.
A escolha do projeto surge de uma necessidade real identificada no cotidiano de pequenos produtores rurais —
incluindo uma motivação pessoal ligada ao trabalho familiar na pecuária leiteira. O controle manual em
cadernos expõe o produtor ao risco de perda física de dados, erros de anotação e extrema dificuldade para
recuperar históricos ou calcular a evolução da produção ao longo do tempo. Migrar essa rotina para um
aplicativo digital resolve um problema operacional concreto e gera valor direto para o dia a dia no campo.
Desenvolver e entregar até o final do período letivo uma aplicação funcional que permita ao pequeno produtor
cadastrar seu rebanho, registrar a produção diária de leite e consultar o histórico de ordenhas de forma
simples e segura, substituindo o uso do caderno de anotações.
Artur de Sousa Lima •
Carlos Rodrigues Nobre
•
Jean Oliveira dos Santos •
Pedro Henrique Pinto Vidal •
Sueli Raquel Tavares Silva •
1. Visão do Produto (Product Vision Statement)
2. Contextualização
3. Product Goal (Meta do Produto)
4. Requisitos Funcionais de Alto Nível (Product Backlog Inicial)
RF01 - Cadastrar e Listar Animais: O sistema deve permitir o cadastro e a listagem de animais contendo
Nome, Brinco (opcional), Categoria (Vaca, Bezerro, Garrote, Novilho) e Sexo.
RF02 - Editar e Inativar Animal: O sistema deve permitir atualizar as informações dos animais ou alterá-los
para o status "inativo" (devido a venda, morte ou descarte).
RF03 - Registrar Cobertura e Previsão de Parto: O sistema deve permitir o registro de cobertura/inseminação
de vacas e calcular automaticamente a Data Provável do Parto (+283 dias).
RF04 - Registrar Parto e Vincular Bezerro: O sistema deve permitir o registro de nascimento de novos
bezerros, vinculando-os à matriz (mãe) correspondente.
RF05 - Medição Mensal de Leite: O sistema deve permitir o lançamento mensal da produção individual de leite
(em litros) para cada vaca em lactação.
RF06 - Coleta Diária e Venda Semanal: O sistema deve permitir o registro do volume total diário de leite
produzido na fazenda e os lançamentos de faturamento das vendas semanais.
RF07 - Apropriação de Custos Diretos: O sistema deve permitir lançar despesas de ração, medicamentos e
mão de obra, atribuindo-as por animal ou por lote.
RF08 - DRE Individual ("A Vaca se Paga?"): O sistema deve apresentar um painel com o resultado financeiro
individual (Receita - Custos), exibindo alertas visuais para vacas que apresentam prejuízo.
RF09 - Ranking de Produtividade: O sistema deve exibir um ranking mensal das vacas mais e menos
produtivas do rebanho para apoio na tomada de decisão.
US01 - Cadastrar e Listar Animais: Como proprietário, quero cadastrar e listar os animais da fazenda com
Nome, Brinco, Categoria (Vaca, Bezerro, Garrote, Novilho) e Sexo, para que eu mantenha o rebanho de 40
cabeças organizado.
US02 - Editar e Inativar Animal: Como proprietário, quero alterar os dados de um animal ou marcá-lo como
"Inativo" (venda, morte, descarte), para que a lista do rebanho exiba apenas animais ativos.
US03 - Registrar Cobertura e Previsão de Parto: Como proprietário, quero registrar a data de
cobertura/inseminação de uma vaca, para que o sistema calcule automaticamente a Data Provável do Parto.
5. User Stories
O sistema deve permitir o cadastro de um animal com os campos: Nome/Brinco (obrigatório e único),
Categoria (Vaca, Novilha, Bezerro, Touro), Sexo e Data de Nascimento.
•
O sistema não deve permitir o cadastro de dois animais com o mesmo Nome ou Número de Brinco. •
A tela de listagem deve exibir todos os animais ativos cadastrados com opção de busca rápida por Nome
ou Brinco.
•
O sistema deve permitir alterar as informações cadastrais de um animal existente. •
O sistema deve permitir inativar um animal mediante a seleção obrigatória de um motivo (Venda, Morte,
Descarte/Descarte Técnico).
•
Animais inativos não devem aparecer na listagem principal por padrão, mas devem ser mantidos no
histórico do banco de dados.
•
O sistema só deve permitir o registro de cobertura/inseminação para animais do sexo feminino e em idade
reprodutiva.
•
Ao salvar a data da cobertura, o sistema deve calcular e exibir automaticamente a Data Provável do Parto
somando exatamente 283 dias à data inserida.
•
US04 - Registrar Parto e Vincular Bezerro: Como proprietário, quero registrar o nascimento de um bezerro
vinculado à matriz (mãe), para que o histórico reprodutivo da vaca seja atualizado e o bezerro entre no
rebanho.
US05 - Medição Mensal de Leite: Como proprietário, quero lançar a medição mensal de litros de leite de cada
vaca em lactação, para que eu acompanhe o desempenho individual do rebanho.
6. Definition of Done (DoD) Inicial
Uma funcionalidade/User Story só será considerada Concluída (Done) quando:
7. Ambiente de desenvolvimento
8. Papéis e responsabilidades
Product Owner (PO) - Jean
A data provável do parto deve ser visível na ficha individual da vaca e no painel de eventos reprodutivos. •
O sistema deve permitir registrar o nascimento de um bezerro a partir de uma cobertura prévia. •
É obrigatório selecionar a matriz (mãe) para realizar o cadastro do novo bezerro. •
O novo bezerro cadastrado deve entrar automaticamente na lista geral do rebanho. •
O status reprodutivo da matriz deve ser atualizado automaticamente para "Lactante". •
O sistema deve permitir o lançamento periódico de medições individuais de leite em litros. •
O lançamento de produção de leite só pode ser realizado para vacas fêmeas em lactação. •
O sistema não deve aceitar valores zerados ou negativos para a quantidade de litros. •
A ficha do animal deve exibir o histórico de todas as medições já cadastradas para ele. •
O código estiver implementado, refatorado e commitado na branch principal do repositório Git/GitHub. •
Os testes básicos (unitários ou de integração para o fluxo da história) tiverem sido executados e
aprovados.
•
A interface deve seguir as 8 regras de Shneiderman. •
Os critérios de aceite definidos na User Story forem totalmente atendidos. •
A funcionalidade tiver sido revisada por outros integrante do time/QA, Artur, Carlos e Pedro. •
Linguagem & Framework: Java e JavaFx. •
Arquitetura: Padrão CSR gerenciado via Maven/Gradle. •
Banco de Dados: PostgreSQL isolado em container via Docker Compose com volume persistente (e
pgAdmin opcional).
•
Git/GitHub: Branches padronizadas (main, develop, feature/*), .gitignore configurado (ignorado target/,
.idea/, etc.) e README com orientações do container.
•
Scrum Master - Sueli
Time de desenvolvimento full stack - Artur front-end, Carlos e Pedro back-end
9. Roadmap do Projeto
Sprint 0 - Início & Concepção
Sprint 1 - Planning & Execution (Gestão de Animais)
Sprint 2 - Planning & Execution (Registro de Produção)
Sprint 3 - Planning & Execution (Histórico e Usabilidade)
Sprint 4 - Planning & Execution (Qualidade e Resiliência)
Sprint 5 - Planning & Execution (Homologação & Entrega Final)
Validação do Tema e do Cliente (Pequenos Produtores Leiteiros). •
Definição da Ferramenta de Acompanhamento (GitHub Projects / Trello). •
Configuração do repositório Git, escolha de frameworks (ex: Flutter/React Native/Android) e banco de
dados.
•
Marco:Sprint #0 Review (Entrega da Documentação Inicial, Visão do Produto e DoD). •
Sprint 1 Planning & Dailies. •
Foco: Implementação do cadastro, listagem, edição e exclusão dos animais (nome e data de nascimento). •
Marco:Sprint 1 Review & Retro (Primeiro incremento: Módulo de Rebanho rodando). •
Sprint 2 Planning & Dailies. •
Foco: Implementação do formulário de entrada diária da quantidade de leite produzido. •
Marco:Sprint 2 Review & Retro (Fluxo de inclusão da ordenha funcional). •
Sprint 3 Planning & Dailies. •
Foco: Tela de consulta do histórico de produção por período e ajustes na interface para facilitar a leitura no
campo.
•
Marco:Sprint 3 Review & Retro (Visualização do histórico e gerenciamento de registros concluídos). •
Sprint 4 Planning & Dailies. •
Foco: Implementação e execução da suíte de testes, validação de armazenamento local (offline) e
refatoração do código.
•
Sprint 5 Planning. •
Foco: Validação do aplicativo completo com o cliente (simulação de uso real), correção de bugs finais e
preparação da apresentação.
•
Marco:Sprint 5 Review & Retro — Entrega Final do Projeto. •