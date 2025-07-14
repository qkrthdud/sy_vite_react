import React from 'react';

interface ContactProps {
  id?: string;
  cls?: string;
}

const Contact: React.FC<ContactProps> = ({ id, cls }) => {
  return (
    <section id={id || "contact"} className={`bg-gray-100 py-10 px-6 text-center ${cls || ""}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">
          매일 조금씩 성장 중인 프론트엔드 개발자 박소영입니다.<br></br>
          <br></br> 
          궁금한 점이 있으시면 <br></br>
          어떤 대화도 언제나 환영합니다!<br></br>  
          <br></br> 
          성실하게, 즐겁게, 끝까지 함께할 자신 있습니다! 😊<br></br>
        </p>

        {/* 이메일 & SNS 링크 */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-lg">
            📧 Email: <a href="mailto:chzfk@naver.com" className="text-blue-500">chzfk@naver.com</a>
          </p>
          <p className="text-lg">
            🔗 Team GitHub: <a href="https://github.com/qkrthdud/team_sosul_react.git" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/qkrthdud/team_sosul_react.git</a><br></br>
            🔗 GitHub: <a href="https://github.com/qkrthdud/sy_vite_react.git" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/qkrthdud/sy_vite_react</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;