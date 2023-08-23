import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BeforeFooter from "../components/BeforeFooter";
import Article from "../components/Article";
import type { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "50 Soft Foods After Tooth Extraction",
  description:
    "Discover 50 delicious and nutritious soft foods for a comfortable recovery after tooth extraction.",
};
export default function Home() {
  return (
    <>
      <div
        style={{
          paddingTop: 150,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://retete.vercel.app/soft-foods-to-eat-after-tooth-extraction",
              },
              headline: "50 Soft Foods After Tooth Extraction",
              datePublished: "2023-08-14T10:00:00Z",
            }),
          }}
        />
      </div>
    </>
  );
}
