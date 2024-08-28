FROM --platform=amd64 nginx:alpine
LABEL maintainer="kuaner@gmail.com"

# Copy the local package files to the container's workspace.
COPY ./dist /usr/share/nginx/html/