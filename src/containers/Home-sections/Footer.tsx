import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkdeIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB93CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            height={40}
            width={40}
            alt="SaaS Logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#" className="cursor-pointer">
            About
          </a>
          <a href="#" className="cursor-pointer">
            Features
          </a>
          <a href="#" className="cursor-pointer">
            Costumers
          </a>
          <a href="#" className="cursor-pointer">
            Updates
          </a>
          <a href="#" className="cursor-pointer">
            Help
          </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkdeIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rigths reserved.
        </p>
      </div>
    </footer>
  );
};
