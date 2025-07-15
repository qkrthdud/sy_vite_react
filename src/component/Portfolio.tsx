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
          <p className="text-gray-600 text-lg">저의 프로젝트들을 소개합니다!🐣💕 </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded overflow-hidden">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/img/portfolio1.jpg')" }}
            ></div>
            <div className="p-4 potbg">
              <h3 className="text-xl font-bold">독립형 팀 프로젝트 SOSUL</h3>
              <a href="http://sosul.dothome.co.kr/" className="potlink" target="_blank" rel="noopener noreferrer">
                보러가기 →
              </a>
            </div>
        </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/img/portfolio2.png')" }}
            ></div>
            <div className="p-4 potbg">
              <h3 className="text-xl font-bold">React로 만든 독립형 팀 프로젝트 SOSUL</h3>
              <a href="https://team-sosul-react.vercel.app/" className="potlink" target="_blank" rel="noopener noreferrer">
                보러가기 →
              </a>
            </div>
        </div>   


          <div className="bg-white shadow rounded overflow-hidden">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/img/portfolio3.png')" }}
            ></div>
            <div className="p-4 potbg">
              <h3 className="text-xl font-bold">플랫폼 팀 프로젝트 SOSUL_ER</h3>
              <a href="https://i-web.kr/green20/" className="potlink" target="_blank" rel="noopener noreferrer">
                보러가기 →
              </a>
            </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/portfolio4.png')" }}
          ></div>
          <div className="p-4 potbg">
            <h3 className="text-xl font-bold">서든어택 시즌패스 클론</h3>
            <Link to="/portfolio/pass" className="potlink" >
              보러가기 →
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/portfolio5.png')" }}
          ></div>
          <div className="p-4 potbg">
            <h3 className="text-xl font-bold">직접 기획했었던 가위바위보 이벤트</h3>
            <Link to="/portfolio/event" className="potlink">
              보러가기 →
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/portfolio6.png')" }}
          ></div>
          <div className="p-4 potbg">
            <h3 className="text-xl font-semibold">그누보드5로 제작한 데카론 홈페이지</h3>
              <a href="http://chzfk.dothome.co.kr/" className="potlink" target="_blank" rel="noopener noreferrer">
                보러가기 →
              </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
