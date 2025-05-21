import React from "react";
interface AboutSectionProps {
  id?: string;
  cls?: string;
}
const AboutSection: React.FC<AboutSectionProps> = ({ id , cls  }) => {
  return (
    <section id={id} className={`py-16 bg-white ${cls}`}>
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-4 text-gray-600">
          안녕하세요! 저는 <strong>React</strong>를 주로 사용하는 프론트엔드 개발자입니다.  
          사용자 경험을 중요하게 생각하며, 최신 기술을 학습하고 적용하는 것을 좋아합니다.  
          <strong>React, TypeScript, 그누보드</strong>를 활용한 프로젝트를 진행하였습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
