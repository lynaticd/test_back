FROM node:14

WORKDIR /

COPY . .

RUN npm install
# RUN npm install --only=production

EXPOSE 3000
CMD ./startup.sh