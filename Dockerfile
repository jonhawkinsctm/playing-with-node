FROM node:14.20.0

ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80

COPY ["package.json", "package-lock.json*", "./src/", "./static/"]

RUN npm install --production

COPY . .

CMD [ "npm", "start" ]