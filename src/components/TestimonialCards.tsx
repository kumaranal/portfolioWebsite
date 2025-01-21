"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    id: 1,
    title: "Incentive Management System",
    description:
      "An application using which FIAT AUTOMOBILE's sales team managing there offers discount & made strategies of sales & discounts",
    client: "Fiat Automobile",
    source: "Tata Consultancy Services",
  },
  {
    id: 2,
    title: "Optical Fiber Management System",
    description:
      "An application using which COMCAST CORPORATION is managing & maintaining (installation, health check etc.) of there optical fiber cable network",
    client: "Comcast",
    source: "Tata Consultancy Services",
  },
  {
    id: 3,
    title: "A Golf course management system",
    description:
      "An application using which golf courses are managing & maintains there golf course area (pond, grass,trees,flag etc.)",
    client: "In-House Product of Company",
    source: "Xotiv Technologies",
  },
  {
    id: 4,
    title: "A Healthcare App for  EKG Review",
    description:
      "An application using which user (patients of hospital opd) are sharing there EKG using the app ,& a group institutional doctor overview that EKG & sent back the review through application only",
    client: "Read My Rhythm",
    source: "Xotiv Technologies",
  },
  {
    id: 5,
    title: "A Real-estate Rent Management System",
    description:
      "An application using which user (patients of hospital opd) are sharing there EKG using the app ,& a group institutional doctor overview that EKG & sent back the review through application only",
    client: "Worthwhile",
    source: "Xotiv Technologies",
  },
  {
    id: 6,
    title: " A Sports Edu-Tech Management System",
    description:
      "An application using which user (patients of hospital opd) are sharing there EKG using the app ,& a group institutional doctor overview that EKG & sent back the review through application only",
    client: "A individual sports institution in USA",
    source: "Xotiv Technologies",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Projects I have Been a Part Of
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
