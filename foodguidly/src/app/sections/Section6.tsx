import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section6.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Hydration and Beverages<br /><br />",
    name1: "Herbal Tea",
    link1: "https://www.acouplecooks.com/herbal-tea-recipes/",
    content1:
      ": Chamomile, peppermint, and ginger teas offer soothing benefits without irritating the extraction site.<br /><br />",
    name2: "Fruit Infused Water",
    link2: "https://www.tasteofhome.com/collection/infused-water-ideas/",
    content2:
      ": Add slices of soft fruits like berries or citrus to your water for a refreshing twist.<br /><br />",
    name3: "Coconut Water",
    link3:
      "https://www.greedygirlgourmet.com/cooking-with-coconut-water-recipes/",
    content3:
      ": A hydrating option rich in electrolytes to aid in recovery.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={16}>
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
