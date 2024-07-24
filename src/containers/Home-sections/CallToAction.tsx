"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app to track your
            progress and motivate your efforts
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            className="absolute -left-[380px] -top-[137px]"
            width={360}
            height={360}
            style={{ y: translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            className="absolute -right-[341px] -top-[19px]"
            width={360}
            height={360}
            style={{ y: translateY }}
          />
        </div>
        <div className="flex gap-2 items-center mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 ">
            <span>Learn more</span>{" "}
            <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
          </button>
        </div>
      </div>
    </section>
  );
};
