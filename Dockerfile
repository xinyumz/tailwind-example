FROM node:16-alpine as build
WORKDIR /app
COPY . ./
RUN npm install -g patch-package && \
    npm install --legacy-peer-deps && \
    cd /app/packages/app && npm install --legacy-peer-deps && \
    cd /app/apps/expo && npm install --legacy-peer-deps && \
    cd /app/apps/next && npm install --legacy-peer-deps && \
    npm run build
# Run stage
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app .
WORKDIR /app/apps/next
EXPOSE 3000
CMD [“npm”, “start”]