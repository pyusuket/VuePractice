# ベースイメージ
FROM node:18-slim

# 作業ディレクトリ
WORKDIR /app

# package.json と lock を先にコピーしてキャッシュ活用
COPY frontend/package*.json ./

# パッケージインストール
RUN npm install

# ソースコードをコピー
COPY frontend/ ./

# ビルドは開発時には不要
# RUN npm run build   ← devモードでは不要

# ポートを明示
EXPOSE 5173

# dev サーバー起動（Viteの開発用）
CMD ["npm", "run", "dev"]
