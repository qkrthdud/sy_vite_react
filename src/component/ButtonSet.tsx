import React from 'react';

interface ButtonSetProps {
  onRpsChoice: (choice: string) => void;
}

const ButtonSet: React.FC<ButtonSetProps> = ({ onRpsChoice }) => {
  return (
    <div className="btn_set">
      <button className="btn_s_up" onClick={() => onRpsChoice('s')}>가위</button>
      <button className="btn_r_up" onClick={() => onRpsChoice('r')}>바위</button>
      <button className="btn_p_up" onClick={() => onRpsChoice('p')}>보</button>
    </div>
  );
};

export default ButtonSet;
