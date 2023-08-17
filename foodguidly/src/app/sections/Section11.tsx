import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section11.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Dairy Delights<br /><br />",
    name1: "Ricotta Cheese",
    link1: "https://www.greatbritishchefs.com/how-to-cook/how-to-make-ricotta",
    content1:
      ": Creamy and mild, ricotta cheese can be spread on soft crackers or used in desserts.<br /><br />",
    name2: "Soft Cheeses with Jam",
    link2:
      "https://www.wisconsincheese.com/the-cheese-life/article/133/jams-jellies",
    content2:
      ": Enjoy the delightful contrast of creamy cheeses with the sweetness of jams or preserves.<br /><br />",
    name3: "Silken Tofu Desserts",
    link3: "https://aseasyasapplepie.com/silken-tofu-chocolate-mousse/",
    content3:
      ": Silken tofu can be blended with cocoa or fruits to create a smooth and healthy dessert.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={31}>
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
