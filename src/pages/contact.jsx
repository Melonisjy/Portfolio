// react-icons
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <section className="contact-section-item">
          <FaGithub size={30} />
          <a
            href="https://github.com/Melonisjy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Melonisjy
          </a>
        </section>
        <section className="contact-section-item">
          <SiVelog size={30} />
          <a
            href="https://velog.io/@meloncoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://velog.io/@meloncoder
          </a>
        </section>
        <section className="contact-section-item">
          <SiGmail size={30} />
          <a href="mailto:dhy2458@gmail.com">dhy2458@gmail.com</a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
