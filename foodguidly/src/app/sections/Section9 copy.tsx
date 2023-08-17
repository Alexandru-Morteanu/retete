import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section9.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Creative Options<br /><br />",
    name1: "Banana Pancakes",
    link1: "",
    content1:
      ": Made from mashed bananas and a few pantry staples, these pancakes are gentle on the gums.<br /><br />",
    name2: "Mashed Cauliflower",
    link2: "",
    content2:
      ": A low-carb alternative to mashed potatoes, packed with vitamins and fiber.<br /><br />",
    name3: "Nut Butters",
    link3: "",
    content3:
      ": Peanut, almond, or cashew butter can be spread on soft toast or enjoyed with banana slices.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={25}>
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
