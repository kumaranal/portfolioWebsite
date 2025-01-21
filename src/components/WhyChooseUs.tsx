"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    id: 1,
    institutionName: "ACADEMY OF TECHNOLOGY",

    grade: "Bachelor of Technology",
    score: 8.1,
    year: 2020,
  },
  {
    id: 2,
    institutionName: "HOOGHLY COLLEGIATE SCHOOL",
    grade: "12th Board",
    score: 80,
    year: 2016,
  },
  {
    id: 3,
    institutionName: "HOOGHLY COLLEGIATE SCHOOL",
    grade: "10th Board",
    score: 88,
    year: 2014,
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
