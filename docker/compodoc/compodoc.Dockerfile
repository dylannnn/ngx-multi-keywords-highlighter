FROM nginx:latest

COPY ./docker/compodoc/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/compodoc /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]