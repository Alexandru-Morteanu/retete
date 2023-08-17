import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section17.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Satisfying Treats<br /><br />",
    name1: "Soft Bread Pudding",
    link1: "https://www.allrecipes.com/recipe/229999/custard-bread-pudding/",
    content1:
      ": A comforting dessert made by soaking soft bread in a mixture of milk, eggs, and sweet flavors.<br /><br />",
    name2: "Banana Ice Cream",
    link2: "https://www.wellplated.com/homemade-banana-ice-cream/",
    content2:
      ": Blend frozen bananas until creamy for a dairy-free ice cream alternative.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={49}>
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
