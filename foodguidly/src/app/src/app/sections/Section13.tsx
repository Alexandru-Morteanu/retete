import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section13.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Wholesome Soups<br /><br />",
    name1: "Butternut Squash Soup",
    link1: "https://www.loveandlemons.com/butternut-squash-soup/",
    content1:
      ": Smooth and velvety, this soup offers a balance of flavors and nutrients.<br /><br />",
    name2: "Broth-Based Soups",
    link2: "https://www.feastingathome.com/10-healing-broth-based-soups/",
    content2:
      ": Enjoy clear broths with soft-cooked vegetables, tender chicken, or tofu for added protein.<br /><br />",
    name3: "Creamy Spinach Soup",
    link3: "https://www.bbcgoodfood.com/recipes/creamy-spinach-soup",
    content3:
      ": Nutrient-packed spinach blended into a silky soup for a nourishing option.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={37}>
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
