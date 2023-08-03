<!-- markdown-lint-ignore MD026 -->

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
      "ID": "test-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "ファイル名",
      "createdDate": "2022/6/1",
      "lastUpdatedDate": "2022/6/2"
      //contentsは削除(しばらくは読み込み時に自動以降(いらん))
    }
  ]
}
```

localFiles.json

```json
{
  "files":[
    "test-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx":FileSystemFileHandle,
    "test-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx":FileSystemFileHandle,
    //このように<Array<FileSystemFileHandle>> とする
  ]
}

```

settings.json

```json
{
  "settings": {
    "theme": "light",
    "defaultQuizType": "normal" // 問題作成時のデフォルトの問題形式
  }
}
```

achievement.json

```json
{
  "achievement": {
    "test-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx": {
      [
        {
          "date": "2022/6/1",
          "detail":{
            "quiz-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx":{
              "correct":true,
            }
          }
        }
      ]
    }
  }
}
```

## ファイル構造について

[ファイル例](./example.quizexam.xml)

## それぞれのページごとの流れ

### /home

![home](./doc/img/home.drawio.svg)

## /edit

![edit](./doc/img/edit.drawio.svg)

## /solve

![solve](./doc/img/solve.drawio.svg)

## 解答の一時保管法

resentAnswerCash

```json
{
  "test-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";"解答(一時)"
}
```

## ヘルプページについて

ヘルプページは mdx を使用して作成する。
