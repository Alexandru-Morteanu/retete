import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BeforeFooter from "../components/BeforeFooter";
import Article from "../components/Article";
import Head from "next/head";
const Soft: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: 150,
      }}
    >
      <Head>
        <title>50 soft foods after tooth extraction</title>
      </Head>
      <Navigation />
      <div className="flex items-center flex-col">
        <div
          className="flex justify-center items-center"
          style={{
            maxWidth: 1182,
          }}
        >
          <Article />
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Soft;
