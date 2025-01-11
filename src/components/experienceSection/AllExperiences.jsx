import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Student",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Back-End Developer ",
    company: "Student",
    date: "2023 - Present",
    responsibilities: [
      "Developing reusable modules.",
      "Collaborating on large-scale applications.",
      "Optimizing server performance.",
      "Innovating for improved user experience.",
    ],
  },
  {
    job: "Full-Stack Web-Developer",
    company: "Student",
    date: "2024 - Present",
    responsibilities: [
      "Building reusable components and modules.",
      "Collaborating on large-scale full stack applications.",
      "Enhancing the performance of web applications.",
      "Innovating for improved user experience.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
