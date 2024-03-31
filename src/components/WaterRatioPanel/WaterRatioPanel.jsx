import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const WaterRatioPanel = () => {
  const openModal = () => {
    console.log('Open modal'); //логіка відкриття модалки
  };
  return (
    <div>
      <div>
        <h2>Today</h2>
        <input type="range" min="0" max="100" />
        <div>
          <p>0%</p>
          <p>50%</p>
          <p>100%</p>
        </div>
      </div>
      <div>
        <button onClick={openModal} type="button">
          <FiPlusCircle />
          Add Water
        </button>
      </div>
    </div>
  );
};

export default WaterRatioPanel;
