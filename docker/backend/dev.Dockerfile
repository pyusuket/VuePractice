# 使用するベースイメージ
FROM python:3.9-slim

# 作業ディレクトリの作成
WORKDIR /app

# 必要なファイルをコピー
# プロジェクトの正しい相対パスを使用
COPY ../../backend/requirements.txt /app/

# 必要なパッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースコードをコピー
COPY backend /app/

# Djangoのポートを開放
EXPOSE 8000

# サーバーの起動コマンド
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
