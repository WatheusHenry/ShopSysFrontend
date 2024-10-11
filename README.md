# Sistema de Gerenciamento de Vendas ShopSys


## Descrição

Este projeto é uma aplicação de gerenciamento de vendas que permite aos usuários registrar, visualizar e acompanhar suas vendas. Inclui funcionalidades de cadastro de vendas, visualização de gráficos de vendas e comissões, além de gerar estatísticas para auxiliar no acompanhamento dos dados de vendas.

## Funcionalidades

- **Listagem de Vendas:** Mostra uma tabela com todas as vendas cadastradas pelo usuário.
- **Cadastro de Vendas:** Permite criar novas vendas por meio de um modal de fácil uso.
- **Gráficos:** Exibe gráficos detalhados sobre vendas e comissões utilizando `DonutChart`.
- **Dashboard de Vendas:** Apresenta um resumo das vendas totais e das vendas do último mês em formato de cartões.
- **Modal de Edição de Vendedores:** Permite a edição das informações de vendedores em um modal interativo.

## Tecnologias Utilizadas

- **Vue.js** com Composition API
- **PrimeVue** para os componentes de UI
- **Axios** para chamadas HTTP
- **Chart.js** para gráficos de dados

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** versão 20.11.1 ou superior
- **npm** ou **yarn**

## Instalação

Siga os passos abaixo para configurar o ambiente local:

1. Clone este repositório:
   ```bash
   git clone https://github.com/WatheusHenry/ShopSysFrontend
    ```

    ```bash
    cd ShopSysFrontend
    ```
    Instale as dependências:

    ```bash
    npm install
    ```
    ou

    ```bash
    yarn install
    ```
    
2. Rodando o Projeto:

    ```bash
    npm run dev
    ```
    ou

    ```bash
    yarn dev
    ```
Abra o navegador e acesse http://localhost:5173 para visualizar a aplicação.


Estrutura de Pastas


    
    ├── src/
    │   ├── assets/        # Imagens e outros arquivos estáticos
    │   ├── components/    # Componentes reutilizáveis da aplicação
    │   ├── views/         # Páginas principais da aplicação
    │   ├── services/      # Serviços para interagir com a API
    │   └── utils/         # Funções utilitárias (formatadores, etc.)
    ├── public/            # Arquivos estáticos servidos diretamente
    └── ...
    
