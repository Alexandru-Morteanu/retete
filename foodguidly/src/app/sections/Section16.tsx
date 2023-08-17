import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section16.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Wholesome Blends<br /><br />",
    name1: "Nutrient-Packed Smoothie Bowl",
    link1: "https://fitfoodiefinds.com/smoothie-bowl-recipes/",
    content1:
      ": Blend fruits, yogurt, and soft granola for a satisfying and nourishing bowl.<br /><br />",
    name2: "Chickpea Salad",
    link2: "https://www.spendwithpennies.com/chickpea-salad/",
    content2:
      ": Mash chickpeas and mix with diced vegetables, herbs, and a light dressing.<br /><br />",
    name3: "Tender Meat or Fish",
    link3:
      "https://www.heb.com/recipe/recipe-article/how-to-make-meat-tender-4-steps/1392677044321?Nrpp=108",
    content3:
      ": If advised by your dentist, opt for tender-cooked chicken, fish, or ground meat.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={46}>
        {Object.keys(section).map((key, index) => {
          if (key.startsWith("name")) {
            const contentKey = `content${key.slice(4)}`;
            const linkKey = `link${key.slice(4)}`;
            return (
              <React.Fragment key={index}>
                <li>
                  <Link href={section[linkKey]} className="cursor-pointer">
                    <b>{section[key]}</b>
                  </Link>
                  <div
                    style={{ display: "inline" }}
                    dangerouslySetInnerHTML={{ __html: section[contentKey] }}
                  ></div>
                </li>
              </React.Fragment>
            );
          }
          return null;
        })}
      </ol>
      <Separate />
    </>
  );
};

export default Section1;
