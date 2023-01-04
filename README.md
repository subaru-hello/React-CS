URL
https://reactcs.azurewebsites.net/
ホスト: Microsoft Azure
### 作成意図
- ASP.NET Core Web API側からデータを取得して、その内容をブラウザに表示する流れを理解するために作成しました。
- 静的型付け言語の学習を通してruby(動的型付け言語)の理解を深めるためにC#を触りました。
### 流れ

```mermaid
sequenceDiagram
    利用者->>ブラウザ: 今日の天気ボタンをクリック
    ブラウザ->>+dotNetCore: 天気データをリクエスト
    dotNetCore->>+外部API: 天気データをリクエスト
    break リクエストが失敗した時
        dotNetCore-->>-ブラウザ: 失敗ステータスをレスポンス
        ブラウザ-->>利用者: データ取得失敗画面を表示
    end
    外部API-->>-dotNetCore: 天気データをレスポンス
    dotNetCore-->ブラウザ: 天気データをレスポンス
    ブラウザ-->>利用者: 天気データを表示
```
`src/components/FetchData.js` ：FetchDataページ用のコンポーネント。ASP.NET Core Web API側からデータを取得して、その内容を画面に表示する

### 構成
- ASP.NET Core 7.0
- React.js v18.0.2
- Typescript
