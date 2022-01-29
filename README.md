# curso-typescript

- Instala os pacotes: 
npm install

- Roda o servidor local
npm run server

- Instala o compilador do typescript
npm install typescript@4.2.2

- Apenas o ECMASCRIPT é suportado pelo navegador. O Typescript precisa ser traduzido/convertido para ECMASCRIPT

- Todo código de typescript é escrito dentro da pasta app, os arquivos na pasta dist são criados automaticamente pelo compilador

- Depois de baixar o typescript é preciso criar o arquivo tsconfig.json

- Para rodar o servidor junto com o compilador e o servidor ao mesmo tempo, através da biblioteca concurrently
npm run start