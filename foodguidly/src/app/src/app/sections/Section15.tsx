import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section15.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Refreshing Treats<br /><br />",
    name1: "Chilled Fruit Cups",
    link1: "https://www.tasteofhome.com/recipes/chilled-fruit-cups/",
    content1:
      ": Diced soft fruits like melons, berries, and peaches served in individual cups.<br /><br />",
    name2: "Chilled Cucumber Soup",
    link2:
      "https://www.foodandwine.com/recipes/cold-cucumber-soup-yogurt-and-dill",
    content2:
      ": A cool and refreshing option, perfect for a hot day.<br /><br />",
    name3: "Soft Mango Slices",
    link3: "https://www.freshoffthegrid.com/dried-mango/",
    content3: ": Ripe mango slices that effortlessly melt in your mouth.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={43}>
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
