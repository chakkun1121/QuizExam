# QuizExam - 一問一答形式のクイズで試験本番の練習をしよう!

## このアプリについて

このアプリでは一問一答形式のクイズを作成し、自分で回答することができます。  
対応するクイズ形式は単純な一問一答形式、穴埋め、選択問題、並べ替えです。

## 技術面の話

- 使用するフレームワークは next.js。
- typescript を使う
- クイズのファイルの保存先はローカル、サーバー、GoogleDrive の中からユーザーが好きな場所を選べる(ただし、初期リリース時にはローカル保存のみ)
- 学習成績の保存先は未ログイン時には localStorage(表示の都合上、testID、testInfo もおいておく)、ログイン時はサーバー

## ファイル構造について

example.quizexam.xml

```xml
<quizexam fileID="test-xxxx-xxxxxx-xxxxxx-xxxx" createdDate="2022/6/1" lastUpdatedDate="2022/6/2">
  <quiz quizID="quiz-xxxx-xxxxxx-xxxxxx-xxxx">
  <!-- 標準の一問一答形式の場合 -->
    <problem>問題文</problem>
    <answer>答え</answer>
  </quiz>
  <quiz quizID="quiz-xxxx-xxxxxx-xxxxxx-xxxx">
    <!-- 穴埋め形式の場合 -->
    <problem>問題文</problem>
    <answer showDefault>解答<hole>穴埋め部分</hole></answer>
  </quiz>
  <quiz quizID="quiz-xxxx-xxxxxx-xxxxxx-xxxx">
    <!-- 選択問題形式の場合 -->
    <problem>問題文</problem>
    <answer showDefault>
      <choices>
        <choice answer>選択肢1(正解)</choice>
        <choice>選択肢2(不正解)</choice>
      </choices>
    </answer>
  </quiz>
  <quiz quizID="quiz-xxxx-xxxxxx-xxxxxx-xxxx">
    <!-- 並べ替え形式の場合 -->
    <problem>問題文</problem>
    <answer showDefault>
      <sorting>
        <word>単語1</word>
        <word>単語2</word>
      </sorting>
    </answer>
  </quiz>
  <quiz quizID="quiz-xxxx-xxxxxx-xxxxxx-xxxx">
  <!-- 解答のみの穴埋め -->
    <answer showDefault>解答<hole>穴埋め部分</hole></answer>
  </quiz>
</quizexam>
```
