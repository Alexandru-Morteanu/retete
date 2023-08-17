import React from "react";
import Header from "./Header";
import Mainer from "./Mainer";

const Article: React.FC = () => {
  return (
    <main
      className="p-4 flex"
      style={{
        fontFamily: "PT Serif,Georgia,sans-serif",
      }}
    >
      <article className="p-4 flex">
        <div>
          <Header />
          <Mainer />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            paddingLeft: 45,
            paddingRight: 15,
            width: "33.3%",
            height: "100%",
            background: "green",
          }}
        >
          ADS
        </div>
      </article>
    </main>
  );
};

export default Article;
