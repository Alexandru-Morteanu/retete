import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section12.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Smooth Spreads<br /><br />",
    name1: "Nut Butter Smoothie",
    link1: "https://minimalistbaker.com/blueberry-almond-butter-smoothie/",
    content1:
      ": Blend nut butter with ripe bananas, milk, and a touch of honey for a nourishing shake.<br /><br />",
    name2: "Creamy Hummus Bowl",
    link2: "https://gatheringdreams.com/hummus-bowl/",
    content2:
      ": Create a hummus bowl with soft toppings like chopped vegetables, olives, and feta.<br /><br />",
    name3: "Rice or Quinoa Bowl",
    link3:
      "https://www.foodandwine.com/recipes/quinoa-and-brown-rice-bowl-vegetables-and-tahini",
    content3:
      ": Mix well-cooked rice or quinoa with soft-cooked vegetables and a gentle sauce.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={34}>
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
