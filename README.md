# Sistema de Gerenciamento de Vendas ShopSys


## Descrição

Este projeto é uma aplicação de gerenciamento de vendas que permite aos usuários registrar, visualizar e acompanhar suas vendas. Inclui funcionalidades de cadastro de vendas, visualização de gráficos de vendas e comissões, além de gerar estatísticas para auxiliar no acompanhamento dos dados de vendas.

## Funcionalidades

- **Listagem de Vendas:** Mostra uma tabela com todas as vendas cadastradas pelo usuário.
- **Cadastro de Vendas:** Permite criar novas vendas por meio de um modal de fácil uso.
- **Gráficos:** Exibe gráficos detalhados sobre vendas e comissões utilizando `DonutChart`.
- **Dashboard de Vendas:** Apresenta um resumo das vendas totais e das vendas do último mês em formato de cartões.
- **Modal de Edição de Vendedores:** Permite a edição das informações de vendedores em um modal interativo.

- ## Telas
     Prints das telas do sistema para uma fácil visualização
    ### Dashboard
     Exibe uma listagem de todas as vendas e seus respectivos vendedores, com filtro de vendedores, e cards que exibem valor total dessas vendas e o valor total das vendas do ultimo mês. <br>

     Um botão que possibilita cadastrar uma nova venda baseada no vendedor logado no sistema.
  
    ![WhatsApp Image 2024-10-12 at 10 55 55](https://github.com/user-attachments/assets/a4809e3d-8672-4565-b488-1d73737b6aff)

  ### Suas Vendas
    Exibe todos os dados da venda do usuário logado no sistema, sendo o valor total das vendas, o valor das vendas do ultimo mês, e o valor total de comissões exibidor em um gráfico de donut, junto com uma listagem de cada venda realizada. <br>
   
    Tendo também um botão que possíbilita cadastrar uma nova venda para o usuário vendedor.
  
    ![WhatsApp Image 2024-10-12 at 10 56 09](https://github.com/user-attachments/assets/b9b13e34-7d45-4999-9fac-ea9753875220)

  ### Vendedores
    Exibe uma listagem com todos os vendedores cadastrados no sistema, com a possibilidade de fazer a edição do nome e do e-mail do vendedor, e fazer a exclusão do vendedor do sistema.
  
   ![WhatsApp Image 2024-10-12 at 10 56 18](https://github.com/user-attachments/assets/5f86fbd2-2e64-4c79-988a-e12df94bd60e)


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
    
