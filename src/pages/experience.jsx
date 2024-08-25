const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-section">
        <section className="experience-section-education">
          <h2 className="experience-section-education-title">Education.</h2>
          <div className="experience-section-education-item">
            <div className="experience-section-education-item-info">
              <h3>상명대학교 스마트정보통신공학과</h3>
              <p>2017.03 - 2023.02</p>
            </div>
            <div className="experience-section-education-item-info">
              <div className="experience-section-education-item-info-academy">
                <h3>멋쟁이사자처럼 블록체인스쿨 3기</h3>
                <h3 style={{ fontWeight: "300" }}>(Frontend / Blockchain)</h3>
              </div>
              <p>2023.03 - 2023.07</p>
            </div>
          </div>
        </section>
        <section className="experience-section-work">
          <h2 className="experience-section-work-title">Work.</h2>
          <div className="experience-section-work-item">
            <div className="experience-section-work-item-info">
              <div className="experience-section-work-item-info-link">
                <h3>JEFF World</h3>
                <h3 style={{ fontWeight: "300" }}>/ Frontend Engineer</h3>
                <a
                  href="https://jeffworld.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [JEFF World Website]
                </a>
              </div>
              <p>2023.08 - Current</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
