import Image from "next/image";
import Link from "next/link";
import React from "react";
import insta from "../imagini/contacte/instagram.svg";
import facebook from "../imagini/contacte/facebook.svg";
import email from "../imagini/contacte/email.svg";
import location from "../imagini/contacte/location.svg";
import phone from "../imagini/contacte/phone.svg";
const Contacte: React.FC = () => {
  return (
    <div
      style={{
        width: 300,
      }}
    >
      <Link
        className="nitro facebook flex items-center"
        href="https://www.facebook.com/hahuleac.alexandru"
      >
        <Image
          className="contacte facebook-icon"
          src={facebook}
          alt="facebook"
        />
        <span>facebook/alex-morteanu</span>
      </Link>
      <Link
        className="nitro insta"
        href="https://www.instagram.com/alexmorteanu/"
      >
        <Image className="contacte insta-icon" src={insta} alt="insta" />
        @alexmorteanu
      </Link>
      <div className="nitro phone">
        <Image className="contacte phone-icon" src={phone} alt="phone" />
        07543022239
      </div>
      <Link
        className="nitro email"
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpJnpBTJNntTtBzbwzDhgVzhbGplNMXcGCWpcKlmjtjfTwkmpmWbZTSjCNxSJRDMpsbTL"
      >
        <Image className="contacte email-icon" src={email} alt="email" />
        alex9mrt@gmail.com
      </Link>
      <Link
        className="nitro location"
        href="https://www.google.co.uk/maps/search/3,+Moore+View,+91+Chalkhill+Rd,+Wembley+HA9+9UN/@51.5634616,-0.2759875,17z/data=!3m1!4b1?entry=ttu"
      >
        <Image
          className="contacte location-icon"
          src={location}
          alt="location"
        />
        Flat 3, Moore View 91,Chalkhill Road
      </Link>
    </div>
  );
};

export default Contacte;
