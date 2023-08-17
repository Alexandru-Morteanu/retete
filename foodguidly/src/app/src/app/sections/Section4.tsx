import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section4.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Tasty Snacks<br /><br />",
    name1: "Applesauce",
    link1: "https://www.simplyrecipes.com/recipes/applesauce/",
    content1:
      ": A classic choice, applesauce is both gentle on the gums and pleasing to the palate.<br /><br />",
    name2: "Hummus",
    link2: "https://www.inspiredtaste.net/15938/easy-and-smooth-hummus-recipe/",
    content2:
      ": This creamy dip can be paired with soft pita bread or cucumber slices.<br /><br />",
    name3: "Cottage Cheese",
    link3: "https://insanelygoodrecipes.com/cottage-cheese-recipes/",
    content3:
      ": A protein-packed snack that can be enjoyed plain or with a sprinkle of herbs.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={10}>
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
