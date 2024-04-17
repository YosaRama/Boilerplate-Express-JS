FROM node:gallium-alpine3.17

WORKDIR /app/system
COPY . .

RUN npm install .
RUN npm run build
EXPOSE 8000

CMD [ "npm", "run", "start" ]
