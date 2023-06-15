# QuizExam - 一問一答形式のクイズで試験本番の練習をしよう!

## このアプリについて

このアプリでは一問一答形式のクイズを作成し、自分で回答することができます。  
 対応するクイズ形式は単純な一問一答形式、穴埋め、選択問題、並べ替えです。

## 技術面の話

- 使用するフレームワークは next.js。
- typescript を使う
- クイズ、学習成績は基本サーバー保管(ログイン時や保存時に定期的に同期)、ただし、未ログイン時は recoil を localStorage 同期で を、バックアップとして、ローカルフォルダー、google drive を使用する。

## localStorage(recoil)に保管する内容

filesInfo.json

```json
{
  "files": [
    {
      "ID": "test-xxxx-xxxxxx-xxxxxx-xxxx",
      "name": "ファイル名",
      "createdDate": "2022/6/1",
      "lastUpdatedDate": "2022/6/2",
      "content": "//ファイルの内容"
    }
  ]
}
```

settings.json

```json
{
  "settings": {
    "theme": "light"
  }
}
```

achievement.json

```json
{
  "achievement": {
    "test-xxxx-xxxxxx-xxxxxx-xxxx": {
      [
        {
          "date": "2022/6/1",
          "detail":[
            "quiz-xxxx-xxxxxx-xxxxxx-xxxx":{
              "correct":true,
            }
          ]
        }
      ]
    }
  }
}
```

## ファイル構造について

[ファイル例](./example.quizexam.xml)