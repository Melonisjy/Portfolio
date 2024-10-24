// icons
import JAVASCRIPT from "../assets/icons/javascript.png";
import TYPESCRIPT from "../assets/icons/typescript.png";
import REACT from "../assets/icons/react.png";
import SASS from "../assets/icons/sass.png";
import TAILWIND from "../assets/icons/tailwindcss.png";

// react
import { useState } from "react";

const AboutMe = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="aboutme">
      <div className="aboutme-section">
        <section className="aboutme-section-left">
          <h1 className="aboutme-section-left-title">
            안녕하세요, 개발자 이주열입니다 👋
          </h1>
          <p className="aboutme-section-left-description">
            <span className="hover-effect">
              저는 상명대학교 정보통신공학과를 졸업하였고 블록체인 기술에 흥미를
              느껴,
            </span>
            <br />
            <span className="hover-effect">
              블록체인 부트캠프에서 블록체인과 웹 프론트엔드 개발에 대한 지식을
              쌓았습니다.
            </span>
            <br />
            <span className="hover-effect">
              현재는 프론트엔드 개발자로써 커리어를 쌓아나가고 있습니다.
            </span>
          </p>
          <div className="aboutme-section-left-skills">
            <div
              className="aboutme-section-left-skills-box"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div
                className={`aboutme-section-left-skills-box-items ${
                  isHover && "stop__animation"
                }`}
              >
                <p>
                  <img
                    src={JAVASCRIPT}
                    alt="js"
                    width="30px"
                    style={{ borderRadius: "4px" }}
                  />
                </p>
                <p>
                  <img src={TYPESCRIPT} alt="ts" width="30px" />
                </p>
                <p>
                  <img src={REACT} alt="react" width="30px" />
                </p>
                <p>
                  <img src={SASS} alt="sass" width="30px" />
                </p>
                <p>
                  <img src={TAILWIND} alt="tailwind" width="30px" />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutme-section-right"></section>
      </div>
    </div>
  );
};

export default AboutMe;
