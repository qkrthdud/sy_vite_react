import React, { useEffect } from "react";


interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 75 },
  { name: "PHP", percentage: 80 },
  { name: "WordPress/CMS", percentage: 90 },
  { name: "Photoshop", percentage: 55 }
];

interface SkillsProps {
  id: string;
  cls?: string;
}

const Skills: React.FC<SkillsProps> = ({ id, cls }) => {
  useEffect(() => {
    const progressBars = document.querySelectorAll<HTMLDivElement>(".progress-bar");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLDivElement;
          const value = bar.getAttribute("aria-valuenow") || "0";
          bar.style.width = `${value}%`;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    progressBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={cls}>
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="flex-1 text-left font-medium">{skill.name}</span>
            <div className="w-full bg-gray-200 rounded-full h-6 relative">
              <div
                className="bg-blue-500 h-6 rounded-full progress-bar"
                aria-valuenow={skill.percentage}
                style={{ width: "0%", transition: "width 1s ease" }}
              ></div>
              <span className="absolute right-2 text-white font-semibold">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
