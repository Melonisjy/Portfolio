const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-section">
        <section className="experience-section-education">
          <h2 className="experience-section-education-title">Education.</h2>
          <div className="experience-section-education-item">
            <div className="experience-section-education-item-info">
              <div className="hover-effect title">
                상명대학교 스마트정보통신공학과
              </div>
              <br />
              <p className="hover-effect">2017.03 - 2023.02</p>
            </div>
            <div className="experience-section-education-item-info">
              <div className="experience-section-education-item-info-academy">
                <div className="hover-effect title">
                  멋쟁이사자처럼 블록체인스쿨 3기 (Frontend / Blockchain)
                </div>
              </div>
              <p className="hover-effect">2023.03 - 2023.07</p>
            </div>
          </div>
        </section>
        <section className="experience-section-work">
          <h2 className="experience-section-work-title">Work.</h2>
          <div className="experience-section-work-item">
            <div className="experience-section-work-item-info">
              <div className="experience-section-work-item-info-link">
                <div className="hover-effect title">
                  <div className="hover-effect title-focus">JEFF World</div> /
                  Frontend Engineer
                </div>
                <a
                  href="https://jeffworld.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hover-effect link">[JEFF World Website]</div>
                </a>
              </div>
              <p className="hover-effect">2023.08 - Current</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
