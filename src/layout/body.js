// pages
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import AboutMe from "../pages/aboutme";
import Experience from "../pages/experience";

function Body({ pageIndex, setIsModalOpen }) {
  const components = [
    <AboutMe />,
    <Experience />,
    <Projects setIsModalOpen={setIsModalOpen} />,
    <Contact />,
  ];
  return (
    <>
      {components.map((component, i) => (
        <div className={`body ${pageIndex === i ? "enter" : "exit"}`} key={i}>
          {component}
        </div>
      ))}
    </>
  );
}
export default Body;
