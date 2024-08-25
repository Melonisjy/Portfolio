const Modal = ({ project, modalRef, closeModal }) => {
  if (!project) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className="modal-frame"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <section className="modal-frame-content">
          <h1 className="modal-frame-content-title">{project.title}</h1>
          <p className="modal-frame-content-item">
            <strong>💡 Description</strong>
            <div>{project.description}</div>
          </p>
          <p className="modal-frame-content-item">
            <strong>📅 Period</strong> <div>{project.period}</div>
          </p>
          <p className="modal-frame-content-item">
            <strong>🛠 Tech Stacks</strong>
            <div>{project.techStacks}</div>
          </p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-frame-content-item"
          >
            🌐 GitHub Repository
          </a>
        </section>
      </div>
    </div>
  );
};

export default Modal;
