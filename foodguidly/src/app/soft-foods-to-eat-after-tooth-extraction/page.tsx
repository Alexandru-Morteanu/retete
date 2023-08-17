import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BeforeFooter from "../components/BeforeFooter";
import Article from "../components/Article";
const Soft: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
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
