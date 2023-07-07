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
      "lastUpdatedDate": "2022/6/2"
      //contentsは削除(しばらくは読み込み時に自動以降)
    }
  ]
}
```

localFileContents.json

```json
{
  "files":[
    "test-xxxx-xxxxxx-xxxxxx-xxxx":"<QuizExam><!-- 中身は省略 --></QuizExam>",//(型はElementとする)
    "test-xxxx-xxxxxx-xxxxxx-xxxx":"<QuizExam><!-- 中身は省略 --></QuizExam>",//このように<Array<Element>> とする
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
          "detail":{
            "quiz-xxxx-xxxxxx-xxxxxx-xxxx":{
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

### resentFileArray\<Array\<Element>>

```json
[
  <quiz quizID="quiz-ccad00ef-f23a-e23c-da5f-5f62ddb58fe1" type="standard"><problem>問題文</problem><answer>答え</answer></quiz> ,
  <quiz quizID="quiz-6040a644-7cbf-e0ef-60ab-8f7c12e89bc7" type="hold"><problem>問題文</problem><answer showDefault="true"解答 <hole>穴埋め部分</hole></answer></quiz>
  //このように<Array<Element>> とする
]
```

## それぞれのページごとの流れ

### /home

![home](./doc/img/home.drawio.svg)
