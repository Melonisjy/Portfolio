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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModal]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

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
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="project-section-project-image"
          data-tooltip-content="클릭해서 자세히 보기"
          data-tooltip-id="tooltip"
          onClick={() => openModal(project)}
        />
        {isMobile && (
          <div className="mobile__description">클릭해서 자세히 보기</div>
        )}
      </div>
    ));
  };

  return (
    <div className="project">
      <div className="project-section">
        {renderProject()}
        <Tooltip
          id="tooltip"
          style={{ backgroundColor: "transparent", color: "#fafafa" }}
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
