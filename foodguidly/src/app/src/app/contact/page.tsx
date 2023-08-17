import BeforeFooter from "../components/BeforeFooter";
import Contacte from "../components/Contacte";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      {" "}
      <div
        className="flex justify-center items-center text-white flex-col bg-green-900"
        style={{
          width: "100%",
          height: "80vh",
        }}
      >
        <br />
        <b className="text-2xl">My Contact</b>
        <br />
        <Contacte />
        <br />
      </div>
      <Navigation />
      <BeforeFooter />
      <Footer />
    </div>
  );
}
