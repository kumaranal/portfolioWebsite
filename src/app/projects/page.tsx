"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/projects.json";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.projects.map((course, index) => (
          <CardContainer
            className="inter-var m-4"
            key={course.id || course.projectName || index} // Add a unique key here
          >
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.projectName}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              {/* Technologies (List) */}
              {course.technologies && course.technologies.length > 0 && (
                <CardItem translateZ="70" className="mt-4">
                  <strong className="text-neutral-600 dark:text-white">
                    Technologies Used:
                  </strong>
                  <div className="flex flex-wrap mt-2 gap-2">
                    {course.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-3 py-1 text-xs font-semibold rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardItem>
              )}

              {/* Responsibilities */}
              {course.responsibility && (
                <CardItem translateZ="70" className="mt-4">
                  <strong className="text-neutral-600 dark:text-white">
                    Responsibilities:
                  </strong>
                  <p className="text-neutral-500 text-sm dark:text-neutral-300 mt-2">
                    {course.responsibility}
                  </p>
                </CardItem>
              )}

              {/* ✅ Conditionally render GitHub link */}
              {course.githubLink && (
                <CardItem translateZ="70" className="mt-4">
                  <a
                    href={course.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    🔗 link
                  </a>
                </CardItem>
              )}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.projectName}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
