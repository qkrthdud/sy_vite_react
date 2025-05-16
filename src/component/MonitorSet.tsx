import React from 'react';

interface MonitorSetProps {
  userChoice: string;
  computerChoice: string;
}

const MonitorSet: React.FC<MonitorSetProps> = ({ userChoice, computerChoice }) => {
  const choiceImages = {
    r: '/img/event/r.png',
    p: '/img/event/p.png',
    s: '/img/event/s.png',
  };

  return (
    <div className="monitor_set">
      <div className="user_choice">
        <img src={choiceImages[userChoice as keyof typeof choiceImages]} alt="user choice" />
      </div>
      <div className="computer_choice">
        <img src={choiceImages[computerChoice as keyof typeof choiceImages]} alt="computer choice" />
      </div>
    </div>
  );
};

export default MonitorSet;
