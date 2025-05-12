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
          프로젝트 협업이나 궁금한 점이 있다면 언제든지 연락 주세요! 😊
        </p>

        {/* 이메일 & SNS 링크 */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-lg">
            📧 Email: <a href="mailto:chzfkchzfk@email.com" className="text-blue-500">chzfkchzfk@gmail.com</a>
          </p>
          <p className="text-lg">
            🔗 GitHub: <a href="https://github.com/qkrthdud/SY_cra-solo-project.git" className="text-blue-500" target="_blank" rel="noopener noreferrer">github.com/SY_cra-solo-project.git</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;