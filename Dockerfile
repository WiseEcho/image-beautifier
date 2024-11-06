FROM --platform=amd64 d-x.cmstop.net/nginx:alpine
LABEL maintainer="kuaner@gmail.com"

# Copy the local package files to the container's workspace.
COPY ./dist /usr/share/nginx/html/wimgse