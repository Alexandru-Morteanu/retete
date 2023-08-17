import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section10.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Comforting Classics<br /><br />",
    name1: "Mashed Sweet Potatoes",
    link1: "https://cookieandkate.com/savory-mashed-sweet-potatoes/",
    content1:
      ": Nutrient-rich and naturally sweet, mashed sweet potatoes provide a comforting side dish.<br /><br />",
    name2: "Rice or Pasta Congee",
    link2: "https://whattocooktoday.com/how-to-make-rice-porridge.html",
    content2:
      ": A soothing Asian dish where rice or pasta is cooked to a soft, porridge-like consistency.<br /><br />",
    name3: "Scrambled Tofu",
    link3: "https://www.noracooks.com/tofu-scramble/",
    content3:
      ": A vegan alternative to scrambled eggs, flavored with herbs and spices.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={28}>
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
