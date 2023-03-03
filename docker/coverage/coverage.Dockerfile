FROM nginx:latest

COPY ./docker/coverage/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/coverage/libs/ngx-multi-keywords-highlighter /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]