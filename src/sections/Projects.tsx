import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/iyagiko.jpg",
      projectName: "IYAGIKO",
      projectLink: "https://iyagiko.heza.tech",
      projectDescription:
        "The Korean Web-Novel Translator combines technology, Redux state management, and the Rapid API for a powerful and convenient translation solution.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Typescript",
        "Vite",
      ],
      projectExternalLinks: {
        github: "https://github.com/heza-ru/Novel_Translator",
        externalLink: "https://iyagiko.heza.tech",
      },
    },
    {
      image: "/greenpatch.jpg",
      projectName: "Green Patch",
      projectLink: "https://community-garden-platform.vercel.app/",
      projectDescription:
        "GreenPatch is a cutting-edge Community Garden Platform built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. This innovative platform serves as a digital hub for individuals and communities passionate about gardening, fostering collaboration, knowledge sharing, and sustainable practices.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/heza-ru/CommunityGardenPlatform",
        externalLink: "https://community-garden-platform.vercel.app",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
