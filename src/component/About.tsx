import React from "react";

interface AboutSectionProps {
  id?: string;
  cls?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, cls }) => {
  return (
    <section id={id} className={`py-16 bg-white ${cls}`}>
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          안녕하세요! 저는 <strong>React</strong>를 중심으로 사용자 중심의 UI를 구현하는 <strong>프론트엔드 개발자</strong>가 되고싶은 박소영입니다.
          <br />
          빠르게 변화하는 기술 흐름 속에서 <strong>최신 프론트엔드 기술</strong>을 학습하고 프로젝트에 적용하는 것을 즐깁니다.
          <br />
          <span className="effect"><strong>React</strong>, <strong>Vite</strong>, <strong>TypeScript</strong>,<strong>Tailwind</strong>, <strong>그누보드</strong></span> 등을 활용하여 다양한 웹 프로젝트를 직접 설계하고 개발하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
