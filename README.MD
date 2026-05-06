<h1 align="center"> Sistema de Gestão - Burratto 3D </h1>

Este projeto consiste no desenvolvimento do front-end de um sistema web voltado para a gestão de empresas de impressão 3D. O projeto foi desenvolvido como a primeira parte da avaliação da disciplina de Desenvolvimento de Sistemas Web I da UFRN.

## 🔧 Funcionalidades do Projeto

O sistema oferece suporte às seguintes funcionalidades operacionais e financeiras:

- **Calculadora de Precificação:** Cálculo automático do preço de venda de peças 3D considerando custo de material, depreciação da impressora e horas trabalhadas.
- **Controle de Estoque:** Gerenciamento de insumos e equipamentos, com soma automática do valor total em estoque.
- **Gerenciamento de Gastos:** Registro e soma de despesas operacionais mensais, como energia e manutenção.
- **Controle de Faturamento:** Acompanhamento das entradas mensais e fluxo de caixa (caixa líquido).
- **Dashboard de Visão Geral:** Interface para acompanhamento rápido do investimento total e lucro acumulado.

## 🚀 Tecnologias Utilizadas

O front-end foi construído utilizando as seguintes tecnologias:

- **HTML5:** Estruturação semântica das páginas e formulários de entrada de dados.
- **CSS3:** Estilização global e de componentes, utilizando variáveis de cor e layouts modernos.
- **JavaScript (Vanilla):** Lógica principal para cálculos de precificação, manipulação do DOM e interatividade das tabelas.

## 📁 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

>     ├── burratto3d/
>     │   ├── burratto.js            # Lógica principal, cálculos e interatividade
>     │   ├── burratto3d.css         # Estilização global do sistema
>     │   ├── calculadora.html       # Tela de precificação de peças
>     │   ├── dashboard.html         # Tela principal de indicadores
>     │   ├── estoque.html           # Gestão de materiais e equipamentos
>     │   ├── faturamento.html       # Registro de entradas e lucro
>     │   ├── gastosdaempresa.html   # Registro de despesas mensais
>     │   ├── login.html             # Tela de acesso ao sistema
>     │   ├── produto.txt            # Definição da visão de produto
>     │   ├── README.MD              # Documentação do projeto
>     │   └── relatorio.txt          # Relatório de desenvolvimento da Parte 1