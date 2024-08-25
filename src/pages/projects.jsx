// library
import { Tooltip } from "react-tooltip";

// react hooks
import { useEffect, useRef, useState } from "react";

// component
import Modal from "../components/modal";

// constant
import { PROJECTS } from "../constant/project";

const Projects = ({ setIsModalOpen }) => {
  const modalRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModal]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModal(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModal(false);
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const renderProject = () => {
    return PROJECTS.map((project, i) => (
      <div className="project-section-project" key={i}>
        <div className="project-section-project-title">{project.title}</div>
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="project-section-project-image"
          data-tooltip-content="click to see more"
          data-tooltip-id="tooltip"
          onClick={() => openModal(project)}
        />
      </div>
    ));
  };

  return (
    <div className="project">
      <div className="project-section">
        {renderProject()}
        <Tooltip
          id="tooltip"
          style={{ backgroundColor: "#AD49E1", color: "white" }}
          place="bottom"
          arrowColor="transparent"
        />
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          modalRef={modalRef}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Projects;
