import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section14.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Nutrient-Dense Choices<br /><br />",
    name1: "Soft-Steamed Veggies",
    link1: "https://www.acouplecooks.com/how-to-steam-vegetables/",
    content1:
      ": Steam vegetables like carrots, zucchini, and broccoli until tender for easy chewing.<br /><br />",
    name2: "Mashed Beans",
    link2: "https://eatsomethingvegan.com/simple-mashed-beans/",
    content2:
      ": Create a protein-rich mash by softening beans and adding herbs and spices.<br /><br />",
    name3: "Soft Rice Noodles",
    link3: "https://thefoodietakesflight.com/homemade-fresh-flat-rice-noodles/",
    content3:
      ": Enjoy them in a clear broth or with a gentle sauce for a light and easy-to-consume dish.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={40}>
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
