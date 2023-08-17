import Image from "next/image";
import React from "react";
import me from "../imagini/me.jpg";
import Link from "next/link";
import { article } from "./Mainer";
const Header: React.FC = () => {
  return (
    <header>
      <Link href="/articles" className="pl-2">
        ARTICLES
      </Link>
      <br />
      <br />
      <h1 className="head font-extrabold text-3xl">{article.title}</h1>
      <br />
      <h2 className="head text-gray-500">{article.description}</h2>
      <br />
      <div className="flex">
        <Link
          href="https://www.instagram.com/alexmorteanu/"
          title="Posts by Alex Morteanu"
        >
          <Image src={me} className="rounded-full h-16 w-16" alt="ico" />
        </Link>
        <div className="flex flex-col justify-center px-5">
          <div className="flex space-x-2">
            <div className="text-gray-500">by</div>
            <div className="font-extrabold">{article.author}</div>
          </div>
          <div className="text-gray-500">{article.publishedDate}</div>
        </div>
      </div>
      <br />
    </header>
  );
};

export default Header;
