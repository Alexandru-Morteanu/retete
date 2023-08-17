import React from "react";
import top from "../imagini/top.webp";
import Image from "next/image";
import Separate from "./Separate";
import Section1 from "../sections/Section1";
import Section3 from "../sections/Section3";
import Section2 from "../sections/Section2";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import Section8 from "../sections/Section8";
import Section9 from "../sections/Section9";
import Section10 from "../sections/Section10";
import Section11 from "../sections/Section11";
import Section12 from "../sections/Section12";
import Section13 from "../sections/Section13";
import Section14 from "../sections/Section14";
import Section15 from "../sections/Section15";
import Section16 from "../sections/Section16";
import Section17 from "../sections/Section17";
export const article = {
  title: "50 Soft Foods After Tooth Extraction: A Comprehensive Guide",
  description:
    " Finding it challenging to eat after a tooth extraction? Discover 50 delicious and nutritious soft foods that can make your recovery period comfortable and enjoyable.",
  author: "Alex Morteanu",
  publishedDate: "6 months ago",
  content: `Maintaining your nutritional intake can be tough after a tooth extraction.<br /><br /> To make sure your mouth heals properly, it is important to stick to soft foods that will not irritate your gums or slow down the healing process.<br /><br />`,
};
const Mainer: React.FC = () => {
  const section1 = {
    title: "",
    content: `<br />Here, we have compiled a comprehensive list of 50 tasty and nutritious soft foods that can make your recovery period more comfortable and enjoyable.<br /><br />`,
  };
  const section2 = {
    title: "Why Soft Foods Matter After Tooth Extraction?<br /><br />",
    content: `Before we dive into the list of soft foods, let's briefly explore why choosing the right foods is so crucial during the recovery phase. <br /><br /> Soft foods are gentle on your mouth, reducing the risk of infection, bleeding, and discomfort. They also provide essential nutrients to aid in the healing process.`,
  };
  const conclusion = {
    title: "Cheers!<br /><br />",
    content: `Navigating the post-tooth extraction period doesn't have to be a mundane experience.<br /><br /> With these 50 soft food options, you're not only nurturing your body but also your spirit.<br /><br /> Celebrate the small victories, relish the flavors, and remember that every bite brings you closer to a healthier, more vibrant you.`,
  };
  return (
    <div
      className="mr-auto ml-auto"
      style={{
        maxWidth: 662,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <Image className="img" src={top} alt="50 food" />
      <div dangerouslySetInnerHTML={{ __html: section1.content }}></div>
      <Separate />
      <b
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: section2.title }}
      ></b>
      <div dangerouslySetInnerHTML={{ __html: section2.content }}></div>
      <Separate />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
      <b
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: conclusion.title }}
      ></b>
      <div dangerouslySetInnerHTML={{ __html: conclusion.content }}></div>
    </div>
  );
};

export default Mainer;
