FROM nginx:latest

COPY ./docker/storybook/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/storybook/mime.types /etc/nginx/

COPY ./dist/storybook/ngx-multi-keywords-highlighter /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]