import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section5.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Sweet Indulgences<br /><br />",
    name1: "Puddings",
    link1:
      "https://www.bbcgoodfood.com/recipes/collection/easy-pudding-recipes",
    content1:
      ": Chocolate, vanilla, or fruit-flavored puddings provide a delightful dessert option.<br /><br />",
    name2: "Fruit Sorbet",
    link2:
      "https://www.theflavorbender.com/easy-fruit-sorbet-only-3-ingredients-and-so-many-flavors/",
    content2:
      ": A refreshing and fruity treat that melts in your mouth.<br /><br />",
    name3: "Chia Seed Pudding",
    link3: "https://feelgoodfoodie.net/recipe/3-ingredient-chia-pudding/",
    content3:
      ": A nutritious and satisfying dessert made by soaking chia seeds in milk or yogurt.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={13}>
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
