import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import {
  WaterRatioContainer,
  RatioScale,
  RatioInput,
  WaterPercentage,
  AddWaterButton,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const value = 70;
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <WaterRatioContainer>
      <RatioScale>
        <h2>Today</h2>
        <RatioInput value={value} type="range" min="0" max="100" />
        <WaterPercentage>
          <p>0%</p>
          <p>50%</p>
          <p>100%</p>
        </WaterPercentage>
      </RatioScale>

      <AddWaterButton onClick={openModal} type="button">
        <FiPlusCircle />
        Add Water
      </AddWaterButton>

      {isModalOpen && (
        <AddWaterModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </WaterRatioContainer>
  );
};

export default WaterRatioPanel;
