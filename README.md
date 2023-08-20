# Getting Started

安裝 `pnpm`

    npm install -g pnpm

安裝 packages

    pnpm install

建立資料庫（`PostgreSQL`）

    pnpm docker-init

建立 API 設定檔

    cp libs/api/common/config/src/lib/development-sample.ts libs/api/common/config/src/lib/development.ts

設定資料庫連線（每次改資料庫 IP 都要做）

    pnpm db-env

同步資料庫（省略 migration 直接同步、產生 prisma client 並更新 seeds）

    pnpm db-sync

啟動 API

    pnpm start
