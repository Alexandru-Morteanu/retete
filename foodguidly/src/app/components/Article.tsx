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
          className="ads flex items-center justify-center"
          style={{
            height: "100%",
            background: "green",
          }}
        >
          AD
        </div>
      </article>
    </main>
  );
};

export default Article;
