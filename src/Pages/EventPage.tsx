import React, { useState } from 'react';
import LampSet from '../component/LampSet';
import MonitorSet from '../component/MonitorSet';
import ButtonSet from '../component/ButtonSet';
import '../scss/event.scss'; // SCSS 스타일 시트

const EventPage = () => {
  const [gameResult, setGameResult] = useState<string>(''); // 게임 결과 상태
  const [userChoice, setUserChoice] = useState<string>(''); // 사용자 선택 상태
  const [computerChoice, setComputerChoice] = useState<string>(''); // 컴퓨터 선택 상태

  const choices = ['r', 'p', 's']; // 가위 바위 보 선택지

  // 가위 바위 보 게임의 결과를 계산하는 함수
  const getResult = (user: string, computer: string): string => {
    if (user === computer) return '비겼습니다!';
    if (
      (user === 'r' && computer === 's') ||
      (user === 'p' && computer === 'r') ||
      (user === 's' && computer === 'p')
    ) {
      return '이겼어요!';
    }
    return '졌어요!';
  };

  // 게임 시작 (사용자가 선택할 때마다 컴퓨터의 선택도 랜덤으로 결정)
  const startGame = (userChoice: string) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, randomChoice);
    setUserChoice(userChoice);
    setComputerChoice(randomChoice);
    setGameResult(result);
  };

  return (
    <div id="container">
      <div className="event_01">
        <LampSet />
        {/* MonitorSet이 userChoice와 computerChoice props를 받도록 구현되어 있는지 확인하세요 */}
        <MonitorSet userChoice={userChoice} computerChoice={computerChoice} />
        {/* ButtonSet이 onRpsChoice prop을 받도록 구현되어 있는지 확인하세요 */}
        <ButtonSet onRpsChoice={startGame} />
        {/* 게임 결과 표시 */}
        <div className="game-result">{gameResult && <p>{gameResult}</p>}</div>
      </div>
    </div>
  );
};

export default EventPage;
