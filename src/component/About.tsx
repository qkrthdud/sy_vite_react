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
          현재는 <strong>React</strong>를 활용한 프로젝트를 진행 중입니다.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8" data-aos="fade-up" data-aos-delay="100">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <img src="https://via.placeholder.com/400" alt="Profile" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-semibold">UI/UX Designer & Web Developer</h2>
          <p className="italic text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul>
              <li><strong>Birthday:</strong> <span>1 May 1995</span></li>
              <li><strong>Website:</strong> <span>www.example.com</span></li>
              <li><strong>Phone:</strong> <span>+123 456 7890</span></li>
              <li><strong>City:</strong> <span>New York, USA</span></li>
            </ul>
            <ul>
              <li><strong>Age:</strong> <span>30</span></li>
              <li><strong>Degree:</strong> <span>Master</span></li>
              <li><strong>Email:</strong> <span>email@example.com</span></li>
              <li><strong>Freelance:</strong> <span>Available</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
