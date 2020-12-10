# 備忘録

## typeorm

### ormconfig.json

設定を書く

### migration

事前に下記スクリプトを記載

`"typeorm": "TS_NODE_PROJECT=tsconfig.json TS_NODE_TRANSPILE_ONLY=true ts-node ./node_modules/typeorm/cli.js"`
https://github.com/typeorm/typeorm/issues/5087

ローカルのEntityとDBを同期する。ただ、migrationsテーブルで管理されない。

``` 
$ yarn typeorm schema:sync
```

マイグレーションファイルの作成

```
// 空のマイグレーションファイルを作成
$ yarn typeorm migration:create -n 任意の名前

// EntityとDBの差分からマイグレーションファイルを作成
$ yarn typeorm migration:generate -n 任意の名前
```

マイグレーションの実行

```
// 実行
$ yarn typeorm migration:run

// 戻し(最後に実行されたものを戻す)
$ yarn typeorm migration:revert
```

### 参考URL

- [公式ドキュメント](https://typeorm.io/#/)
- [TypeORMで本番運用を見据えたマイグレーション](https://qiita.com/jnst/items/9a4c1a9f15b165e0e420)
- [TypeORMはNode.js開発のスタンダードになるか？](https://qiita.com/tejitak/items/b6965380afd600db6513#%E3%81%9D%E3%81%AE%E4%BB%96typeorm%E3%81%AB%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%BE%E3%81%A0%E3%82%AA%E3%82%B9%E3%82%B9%E3%83%A1%E3%81%AA%E6%A9%9F%E8%83%BD%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99)
- [TypeScriptでExpress.js開発するときにやることまとめ (docker/lint/format/tsのまま実行/autoreload)](https://qiita.com/techneconn/items/012bdf1b9ff3881546b3#typescript%E5%B0%8E%E5%85%A5)
