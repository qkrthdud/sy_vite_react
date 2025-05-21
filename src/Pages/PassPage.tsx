import React, { useState } from 'react';
import '../scss/global.scss';

const PassPage = () => {
  const [currentReward, setCurrentReward] = useState(0); // 탭 상태
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  return (
    <div className="passpage">
      {/* 헤더 */}
      <div className='bg-top'>
      <section className="passpage-header">
      </section>

      <div className='passpage-event01 d-flex flex-column align-items-center'>
  {/* 팝업 열기 버튼 */}
  <img
    src="/img/passpage/event01/event01_btn01.png"  // 팝업 열기 이미지
    alt="팝업 열기"
    onClick={() => setShowPopup1(true)}  // ✅ 상태 변경 함수 사용
    className="popup-open-btn pt-5 mt-5"
    style={{ cursor: 'pointer' }} 
  />

  {/* 팝업 */}
  {showPopup1 && (
    <div 
      className="position-fixed start-0 top-0 bottom-0 end-0 d-flex justify-content-center align-items-center" 
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 흐림 효과
        zIndex: 10000,
      }}
      onClick={() => setShowPopup1(false)} // ✅ 팝업 외부 클릭 시 닫기
    >
      <div 
        onClick={(e) => e.stopPropagation()}  // ✅ 팝업 내부 클릭은 이벤트 전파 중지
        className="popup-content position-relative"
      >
        <img
          src="https://img.sa.nexon.com/images/event/2025/0403/intro/popup_challenge.jpg"
          alt="팝업"
        />
        {/* 팝업 닫기 버튼 */}
        <button 
          onClick={() => setShowPopup1(false)} 
          className="popup-close-btn position-absolute top-0 end-0 m-3"
        >
        </button>
      </div>
    </div>
  )}

      <ul className="cont_tabs reward_tab">
        <li
          className={`reward_tab_01 ${currentReward === 0 ? 'active' : ''}`}
          onClick={() => setCurrentReward(0)}
        >
          <a href="#event01_content01" onClick={(e) => e.preventDefault()}>
            <span className="hide">서든패스 보상</span>
          </a>
        </li>
        <li
          className={`reward_tab_02 ${currentReward === 1 ? 'active' : ''}`}
          onClick={() => setCurrentReward(1)}
        >
          <a href="#event01_content02" onClick={(e) => e.preventDefault()}>
            <span className="hide">리부트패스 보상</span>
          </a>
        </li>
      </ul>
    </div>

     
      {/* 이벤트02 - 패스샵 */}
      <section className="passpage-event02">
        {/* 배경 이미지 */}
        <img
          src="/img/passpage/event02/event02_bg.jpg"
          alt="패스샵 배경"
          className="passpage-event02-bg"
        />

      {/* 팝업 열기 버튼 (이미지 버튼) */}
        <img
          src="/img/passpage/event02/event02_btn01.png"  // 팝업 열기 이미지
          alt="팝업 열기"
          onClick={() => setShowPopup2(true)}  // ✅ 이벤트02 전용 팝업 열기
          className="popup-open-btn2"
        />  

        {/* 팝업 */}
        {showPopup2 && (
          <div className="popup">
            {/* 배경 흐림 효과 */}
            <div className="popup-background" />            
            <img
              src="/img/passpage/event02/popup_passshop.jpg"  // 팝업 이미지
              alt="팝업"
              className="popup-image"
            />
            {/* 팝업 닫기 버튼 (투명 div로 처리) */}
            <div
              onClick={() => setShowPopup2(false)}  // ✅ 이벤트02 전용 팝업 닫기
              className="popup-close-btn"
            />
          </div>
        )}


        {/* 보상 이미지 */}
        <img
          src={
            currentReward === 0
              ? '/img/passpage/event02/event02_tab1.png'  // 첫 번째 보상 이미지
              : '/img/passpage/event02/event02_tab2.png'  // 두 번째 보상 이미지
          }
          alt="보상 이미지"
          className="reward-image"
        />

        {/* 탭 이미지 (클릭 가능) */}
        <div
          onClick={() => setCurrentReward(0)}
          className="reward-tab-left"
        />
        <div
          onClick={() => setCurrentReward(1)}
          className="reward-tab-right"
        />
      </section>

      {/* 이벤트03 */}
      <section className="passpage-event03">
        <img
          src="/img/passpage/event03/event03_bg.jpg"
          alt="패스페이지 리워드"
          className="passpage-event03-image"
        />
      </section>

      {/* 푸터 */}
      <div id="footer">
        <a href="https://sa.nexon.com/main/index.aspx">
          <img
            src="https://img.sa.nexon.com/images/event/2025/0403/intro/footer_btn.png"
            alt="홈페이지 바로가기"
          />
        </a>
      </div>
    </div>
  </div>
  );
};

export default PassPage;
