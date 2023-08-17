import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section7.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "International Flavors<br /><br />",
    name1: "Congee (Rice Porridge)",
    link1: "https://www.foodandwine.com/recipes/basic-chinese-congee",
    content1:
      ": A staple in Asian cuisine, congee is gentle on the stomach and easy to customize.<br /><br />",
    name2: "Polenta",
    link2:
      "https://www.allrecipes.com/recipe/234933/how-to-make-perfect-polenta/",
    content2:
      ": A creamy Italian dish made from cornmeal, often served with soft cheese or sauce.<br /><br />",
    name3: "Mashed Daal",
    link3: "https://www.cookwithnabeela.com/recipe/daal-mash/",
    content3:
      ": A lentil-based dish from Indian cuisine that's both nutritious and satisfying.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={19}>
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

export default Section2;
