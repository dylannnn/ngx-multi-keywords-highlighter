FROM nginx:latest

COPY ./docker/demo/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/apps/demo /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]