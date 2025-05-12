import React from 'react';

interface AboutProps {
  id?: string;
  cls?: string;
}

const About: React.FC<AboutProps> = ({ id, cls }) => {
  return (
    <section id={id || "about"} className={`bg-gray-100 py-10 px-6 text-center ${cls || ""}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          안녕하세요! 저는 <strong>React</strong>를 주로 사용하는 프론트엔드 개발자입니다.  
          사용자 경험을 중요하게 생각하며, 최신 기술을 학습하고 적용하는 것을 좋아합니다.  
          현재는 <strong>React</strong>를 활용한 프로젝트를 진행 중입니다.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/qkrthdud/SY_cra-solo-project.git"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            GitHub
          </a>
          <a
            href="mailto:chzfkchzfk@email.com"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
