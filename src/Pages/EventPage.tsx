import React, { useState, useEffect, useRef } from 'react';
import '../scss/event.scss';
// 전역변수
const EventPage: React.FC = () => {

  const imageList = [
    '/img/event/r.png', // 0
    '/img/event/p.png', // 1
    '/img/event/s.png', // 2
  ];

  const rpsList = [
    'r',
    'p',
    's'
  ];

const [index, setIndex] = useState(0); // 현재 이미지 index
const [gameStart, setGamestart] = useState(false);
const [rpsResult, GetRpsResult] = useState('');
const [gameResult, setGameResult] = useState(false);

const intervalRef = useRef<NodeJS.Timeout | null>(null); // ✅ 여기 추가
useEffect(() => {
  if(!gameStart) return;

  var imageNo = 0;
  intervalRef.current = setInterval(() => {
    imageNo ++;
    if(imageNo == 3){
      imageNo = 0;
    }
    setIndex(imageNo)
  }, 100); // 1초마다

  console.log('게임시작')
    return () => {
       if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
}, [gameStart]);

useEffect(() => {
    if(rpsResult == '' || gameResult) return;

    console.log(rpsResult)
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      console.log('결과:' ,rpsList[index])
      console.log('내가 클릭한 가위바위보:', rpsResult)
    if(rpsList[index] == rpsResult){
      alert('비겼슴니다')
      setGamestart(false);
      setTimeout(() => {
        setGamestart(true);
      }); // 10ms 정도면 충분
    }
    else if((rpsResult == 'p' && rpsList[index] == 'r') || (rpsResult == 's' && rpsList[index] == 'p') || (rpsResult == 'r' && rpsList[index] == 's')) {
      alert('이겼슴니다')
      setGameResult(true);
    }
    else {
      alert('졌슴니다')
      setGameResult(true);
    }

}, [rpsResult]);

  return (
    <div id="wrap">
      <div id="container">
        <div className="event_01">
          {/* 램프 세트 */}
          <div className="lamp_set">
            <div
              className="lamp_red"
              style={{ opacity: 0.5 }}
              title="Red Lamp"
            />
            <div
              className="lamp_green"
              style={{ opacity: 1 }}
              title="Green Lamp"
            >
              <div className="label" />
            </div>
          </div>
          {/* 모니터 셋 */}
          <div className="monitor_set">
            <div className="win_01">
              <div className="circle_bg" />
              <div className="rsp">
                <img src={imageList[index]} alt="" />
              </div>
            </div>
          </div>

          {/* 버튼 세트 */}
          <div className="btn_set">
            <button className="btn_start_light" onClick={() => setGamestart(true)} />
            <button className={`btn_s_up ${gameStart ? 'active' : ''}`} onClick={() => GetRpsResult("s")} />
            <button className={`btn_r_up ${gameStart ? 'active' : ''}`} onClick={() => GetRpsResult("r")} />
            <button className={`btn_p_up ${gameStart ? 'active' : ''}`} onClick={() => GetRpsResult("p")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
