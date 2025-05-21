import React, { useState } from 'react';
import '../scss/event.scss';

const EventPage: React.FC = () => {
  // 예시 상태: 버튼 클릭하면 상태 변경 같은거
  const [activeLamp, setActiveLamp] = useState<'red' | 'green' | null>(null);

  return (
    <div id="wrap">
      <div id="container" className="event_01">
        {/* 램프 세트 */}
        <div className="lamp_set">
          <div
            className="lamp_red"
            onClick={() => setActiveLamp('red')}
            style={{ opacity: activeLamp === 'red' ? 1 : 0.5, cursor: 'pointer' }}
            title="Red Lamp"
          />
          <div
            className="lamp_green"
            onClick={() => setActiveLamp('green')}
            style={{ opacity: activeLamp === 'green' ? 1 : 0.5, cursor: 'pointer', position: 'relative' }}
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
              {/* 여기 원하는 내용 */}
              <p style={{ color: '#fff' }}>Response Area</p>
            </div>
          </div>
        </div>

        {/* 버튼 세트 */}
        <div className="btn_set">
          <button className="btn_start_light" onClick={() => alert('Start Light 클릭!')} />
          <button className="btn_s_up" onClick={() => alert('S Up 클릭!')} />
          <button className="btn_r_up" onClick={() => alert('R Up 클릭!')} />
          <button className="btn_p_up" onClick={() => alert('P Up 클릭!')} />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
