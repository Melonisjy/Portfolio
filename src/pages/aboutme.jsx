import CODE from "../assets/code-icon.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-section">
        <section className="aboutme-section-left">
          <h1 className="aboutme-section-left-title">{`Frontend Engineer.`}</h1>
          <p className="aboutme-section-left-description">
            <span className="aboutme-section-left-description-headline">
              안녕하세요, 1년차 프론트엔드 개발자 이주열 입니다.
            </span>
            <br />
            문제를 해결할 때는 먼저 스스로 고민하고, 그 후 팀원들과 함께 최선의
            방법을 찾습니다.
            <br />
            또한 항상 사용자의 입장에서 더 나은 경험을 만들기 위해 노력합니다.
            <br />
            블록체인 기술에 큰 관심을 가지고 있으며, 앞으로 이 분야에서 계속
            성장하고 싶습니다.
            <br />
            최근엔 Go 언어로 백엔드 개발을 하기 위해 학습하고 있습니다.
          </p>
          <div className="aboutme-section-left-skills">
            <h2 className="aboutme-section-left-skills-headline">Skills</h2>
            <span className="aboutme-section-left-skills-items">
              Javascript, React, HTML & CSS, SCSS, Tailwind CSS, Git
            </span>
          </div>
        </section>
        <section className="aboutme-section-right">
          <img src={CODE} alt="developer" style={{ width: "350px" }} />
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
