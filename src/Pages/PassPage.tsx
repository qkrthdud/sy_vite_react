import React, { useState } from 'react';
import '../scss/global.scss';

const PassPage = () => {
  const [currentReward, setCurrentReward] = useState(0); // 탭 상태
  const [showPopup, setShowPopup] = useState(false);  // 팝업 상태 관리

  return (
    <div className="passpage">
      {/* 헤더 */}
      <section className="passpage-header">
        <img
          src="/img/passpage/header/header.jpg"
          alt="패스페이지 헤더"
          className="passpage-header-image"
        />
      </section>

      {/* 이벤트01 */}
      <section className="passpage-event01">
        <img
          src="/img/passpage/event01/event01_bg.jpg"
          alt="패스페이지 챌린지"
          className="passpage-event01-image"
        />
      </section>

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
          onClick={() => setShowPopup(true)}  // 팝업을 열도록 설정
          className="popup-open-btn"
        />  

        {/* 팝업 */}
        {showPopup && (
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
              onClick={() => setShowPopup(false)}  // 팝업 닫기
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
  );
};

export default PassPage;
