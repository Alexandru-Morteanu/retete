import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section2.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Lunchtime Comfort<br /><br />",
    name1: "Creamed Soups",
    link1: "https://insanelygoodrecipes.com/creamy-soup-recipes/",
    content1:
      ": Opt for mild flavors like potato, carrot, or tomato bisque for a warm and soothing meal.<br /><br />",
    name2: "Mashed Potatoes",
    link2: "https://www.allrecipes.com/recipe/24771/basic-mashed-potatoes/",
    content2:
      ": Creamy and buttery, mashed potatoes are easy on the palate.<br /><br />",
    name3: "Avocado Mash",
    link3: "https://thebalancednutritionist.com/avocado-mash/",
    content3:
      ": Loaded with healthy fats, avocados can be mashed and spread on soft bread or crackers<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={4}>
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
