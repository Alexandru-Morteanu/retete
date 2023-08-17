import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section3.webp";
import Image from "next/image";
const Section2: React.FC = () => {
  const section: Record<string, string> = {
    title: "Nourishing Dinners<br /><br />",
    name1: "Pasta",
    link1:
      "https://www.jamieoliver.com/recipes/pasta-recipes/a-basic-recipe-for-fresh-egg-pasta/",
    content1:
      ": Choose soft pasta shapes like penne or farfalle, paired with a light tomato or cream sauce.<br /><br />",
    name2: "Egg Dishes",
    link2: "https://www.bbcgoodfood.com/recipes/collection/egg-recipes",
    content2:
      ": Scrambled or soft-boiled eggs are protein-rich options that require minimal chewing.<br /><br />",
    name3: "Tofu Stir-Fry",
    link3: "https://www.wellplated.com/tofu-stir-fry/",
    content3:
      ": Soft tofu, combined with well-cooked vegetables, creates a flavorful and gentle stir-fry.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={7}>
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
