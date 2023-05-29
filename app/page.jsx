import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import GoogleAnalytics from "./googleAnalytics";
export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
