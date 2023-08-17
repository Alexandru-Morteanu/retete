import Link from "next/link";
import React from "react";
import Contacte from "./Contacte";
const BeforeFooter: React.FC = () => {
  return (
    <div
      className="bg-gray-900 text-white py-2 flex justify-center"
      style={{
        width: "100%",
        fontFamily: "PT Serif,Georgia,sans-serif",
      }}
    >
      <div
        className="nav bf flex p-8"
        style={{
          maxWidth: 1182,
          height: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 300,
          }}
        >
          <b className="text-xl text-center">
            <div>About</div>
            <div className="bg-green-300 text-black">foodGuidly</div>
          </b>
          <div className="text-gray-300 mx-auto">
            <br />
            Your source for culinary inspiration, nutritional advice, and
            healthy eating tips.
            <br />
            <br /> Discover diverse recipes tailored to your preferences,
            fostering both taste exploration and health objectives.
            <br />
            <br /> Explore insights on balanced nutrition, cooking techniques,
            and mindful consumption—all in one place. Embark on a journey to a
            vibrant, healthier lifestyle with <b>FoodGuidly.</b>
            <br />
            <br /> Read more{" "}
            <Link href="/about-us" className=" text-green-300 inline">
              about us
            </Link>
            .
          </div>
        </div>
        <br />
        <b className="text-xl">Articles</b>
        <br />
        <br />
        <div>
          <b>Follow On Social Media</b>
          <br />
          <br />
          <Contacte />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
