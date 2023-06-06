export default function PrivacyPolicy() {
  return (
    <>
      <h1 className="p-1 text-4xl font-bold">プライバシーポリシー</h1>
      <section className="p-1">
        <h2 className="text-3xl">cookieについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
          >
            Googleアナリティクスサービス利用規約のページ
          </a>
          や
          <a
            href="https://policies.google.com/technologies/ads?hl=ja"
            target="_blank"
          >
            Googleポリシーと規約ページ
          </a>
          をご覧ください。
        </p>
      </section>
    </>
  );
}
