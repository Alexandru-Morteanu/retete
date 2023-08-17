import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section8.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Quick Bites<br /><br />",
    name1: "Rice Pudding",
    link1: "https://www.bbcgoodfood.com/recipes/a-nice-rice-pudding",
    content1:
      ": A comfort food made by simmering rice in milk until creamy and tender.<br /><br />",
    name2: "Yogurt Parfait",
    link2: "https://www.allrecipes.com/recipe/37095/yogurt-parfait/",
    content2:
      ": Layer yogurt, soft fruits, and granola for a delightful parfait.<br /><br />",
    name3: "Soft Cheese",
    link3: "https://www.bbcgoodfood.com/recipes/collection/soft-cheese-recipes",
    content3:
      ": Brie, camembert, or cream cheese can be spread on soft crackers or bread.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={22}>
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
