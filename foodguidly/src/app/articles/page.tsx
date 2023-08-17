import Image from "next/image";
import BeforeFooter from "../components/BeforeFooter";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import image from "../imagini/top.webp";
import Link from "next/link";

export default function Article() {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <div className="w-full flex justify-center p-16">
        <Link href="/soft-foods-to-eat-after-tooth-extraction">
          <div
            style={{
              maxWidth: 300,
            }}
          >
            <b className="text-xl">
              50 Soft Foods After Tooth Extraction: A Comprehensive Guide
            </b>

            <Image className="py-5" src={image} alt="50 soft food" />
          </div>
        </Link>
      </div>
      <Navigation />
      <BeforeFooter />
      <Footer />
    </div>
  );
}
