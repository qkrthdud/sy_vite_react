import { Link } from 'react-router-dom';

interface PortfolioProps {
  id: string;
  cls: string;
}

function Portfolio({ id, cls }: PortfolioProps) {
  return (
    <section id={id} className={`${cls} py-16 bg-gray-100`}>      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600">저의 프로젝트들을 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Portfolio 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">독립형 페이지</h3>
              <Link to="/portfolio/pass" className="text-blue-500 underline">보러가기 →</Link>
            </div>
          </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Portfolio 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">플랫폼 프로젝트</h3>
              <a href="https://i-web.kr/green20/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">보러가기 →</a>
            </div>
          </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Portfolio 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">서든어택 시즌패스 클론</h3>
              <Link to="/portfolio/pass" className="text-blue-500 underline">보러가기 →</Link>
            </div>
          </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Portfolio 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">이벤트 페이지</h3>
              <Link to="/portfolio/event" className="text-blue-500 underline">보러가기 →</Link>
            </div>
          </div>
          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Portfolio 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">그누보드</h3>
              <Link to="/portfolio/event" className="text-blue-500 underline">보러가기 →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
