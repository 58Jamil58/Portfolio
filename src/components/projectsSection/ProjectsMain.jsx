import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Jobzee",
    year: "May2023",
    align: "right",
    image: "../../public/images/website-img-1.webp",
    link: "https://jobzee-jamil.netlify.app/",
  },
  {
    name: "Hospital-Management",
    year: "Jan2024",
    align: "left",
    image: "../../public/images/website-img-2.png",
    link: "https://hospital-management-jamil.netlify.app/",
  },
  {
    name: "Hospital-Management-Dashboard",
    year: "Jan2024",
    align: "right",
    image: "../../public/images/website-img-3.png",
    link: "https://admin-dashboard-jamil.netlify.app/",
  },
  {
    name: "Text-Manipulator",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.png",
    link: "https://58jamil58.github.io/TextManipulator/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
