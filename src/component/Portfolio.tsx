import { Link } from 'react-router-dom';

interface PortfolioProps {
  id: string;
  cls: string;
}

function Portfolio({ id, cls }: PortfolioProps) {
  return (
    <section id={id} className={cls}>
      <div className="p-5">
        <h2>📁 포트폴리오</h2>
        <ul>
          <li>
            <Link to="/portfolio/pass" className="text-blue-500 underline">
              독립형 페이지 보러가기 →
            </Link>
          </li>
          <li>
            <a href="https://i-web.kr/green20/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              플랫폼 프로젝트 페이지 보러가기 →
            </a>
          </li>
          <li>
            <Link to="/portfolio/pass" className="text-blue-500 underline">
              서든어택 시즌패스 클론페이지 보러가기 →
            </Link>
          </li>
          <li>
            <Link to="/portfolio/event" className="text-blue-500 underline">
              이벤트 페이지 보러가기 →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
