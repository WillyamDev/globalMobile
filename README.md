
# Sistema de Gestão de Riscos e Rotas Seguras

## Descrição
Este é um projeto desenvolvido para fornecer rotas seguras em situações de risco, como desastres naturais. A aplicação permite aos usuários visualizar, criar e editar rotas de evacuação e também visualizar informações sobre desastres atuais.

O sistema é composto por dois principais componentes:
1. **Back-End (API)**: Implementado em .NET Core, disponibilizando a API que gerencia as rotas e desastres.
2. **Front-End (Aplicativo React Native)**: Responsável pela interface do usuário, permitindo interação com as rotas e a visualização das informações.

## Tecnologias Utilizadas
- **Back-End**: .NET Core com Oracle Database.
- **Front-End**: React Native com Expo.
- **Banco de Dados**: Oracle
- **API de Comunicação**: RESTful API.

## Como Rodar o Projeto

### 1. Rodando o Back-End (API) Localmente

#### Passo 1: Clonar o repositório do Back-End
Clone o repositório do back-end para a sua máquina local:

```bash
git clone https://github.com/Nicola3423/Global2-dotnet.git
```

#### Passo 2: Rodar a API

1. Navegue até o diretório do projeto:
   
   ```bash
   cd Global2-dotnet
   ```

2. Abra o projeto no Visual Studio e execute-o. A API estará disponível no endereço `https://localhost:7055/api/rotas-seguras`.

3. A API precisa estar rodando para que o aplicativo front-end consiga se comunicar com ela.

### 2. Rodando o Front-End (Aplicativo React Native)

#### Passo 1: Clonar o repositório do Front-End
Clone o repositório do front-end:

```bash
git clone https://github.com/WillyamDev/globalMobile.git
```

#### Passo 2: Atualizar a URL da API no Front-End

Abra o arquivo que gerencia as requisições HTTP no seu projeto React Native e altere a URL da API para a seguinte:

```javascript
const apiUrl = 'http://localhost:7055/api/rotas-seguras'; // URL da API local
```

#### Passo 3: Instalar Dependências e Rodar o Aplicativo

1. Navegue até o diretório do projeto:

   ```bash
   cd globalMobile
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o aplicativo no emulador ou dispositivo:

   ```bash
   npm start
   ```

Agora, o aplicativo deve se comunicar com a API local e funcionar corretamente.

### 3. Vídeo da Apresentação
Assista à apresentação completa do projeto no vídeo abaixo:

[Assista ao vídeo da apresentação](https://www.youtube.com/watch?v=w_hARc50apw)

### 4. Integrantes do Projeto
- **Igor Akira Bortolini Tateishi** - RM: 554227
- **Nicola Monte Cravo Garofalo** - RM: 553991
- **Willyam Santos Souza** - RM: 554244

## Resumo do Projeto

O Sistema de Gestão de Riscos e Rotas Seguras é uma aplicação móvel desenvolvida com React Native, que permite aos usuários visualizar e criar rotas seguras para evacuação durante situações de risco. Ele também fornece informações atualizadas sobre desastres em andamento e permite a personalização das configurações, como notificações de desastres.

---

Se você tiver alguma dúvida ou precisar de ajuda, não hesite em nos contatar! 😊
