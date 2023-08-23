import React from "react";
import Link from "next/link";
import Separate from "../components/Separate";
import image from "../imagini/sections/Section1.webp";
import Image from "next/image";
const Section1: React.FC = () => {
  const section: Record<string, string> = {
    title: "Breakfast Delights<br /><br />",
    name1: "Smoothies",
    link1: "https://www.liveeatlearn.com/how-to-make-a-smoothie/",
    content1:
      ": Blend a mix of fruits, yogurt, and protein powder for a nutritious and easy-to-consume morning treat.<br /><br />",
    name2: "Oatmeal",
    link2: "https://feelgoodfoodie.net/recipe/how-to-make-oatmeal/",
    content2:
      ": Cooked to a creamy consistency, oatmeal offers a hearty start to your day.<br /><br />",
    name3: "Greek Yogurt",
    link3: "https://www.liveeatlearn.com/greek-yogurt/",
    content3:
      ": Packed with protein, this creamy delight can be topped with honey, berries, or soft granola.<br />",
  };
  return (
    <>
      <b
        className="bg-green-300 text-xl font-bold h-fit"
        dangerouslySetInnerHTML={{ __html: section.title }}
      ></b>{" "}
      <Image src={image} alt={section.title} />
      <br />
      <ol start={1}>
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
