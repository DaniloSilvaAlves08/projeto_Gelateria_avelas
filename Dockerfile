# --- Estágio 1: Build da Aplicação React ---
# Usamos uma imagem oficial e leve do Node.js para construir o projeto.
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia os arquivos de manifesto de pacotes.
COPY package*.json ./

# Instala todas as dependências do projeto.
RUN npm install

# Copia todo o resto do código-fonte.
COPY . .

# Executa o script de build definido no package.json para gerar os arquivos estáticos.
RUN npm run build

# --- Estágio 2: Servidor de Produção ---
# Usamos uma imagem super leve do Nginx para servir os arquivos.
FROM nginx:stable-alpine

# Copia os arquivos estáticos da pasta 'dist' do estágio de build para a pasta padrão do Nginx.
COPY --from=build /app/dist /usr/share/nginx/html

# Copia um arquivo de configuração customizado para o Nginx (vamos criar a seguir).
# Isto é crucial para que o React Router funcione corretamente.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 (porta padrão que o Nginx usa para servir sites).
EXPOSE 80

# Comando para iniciar o servidor Nginx em primeiro plano.
CMD ["nginx", "-g", "daemon off;"]