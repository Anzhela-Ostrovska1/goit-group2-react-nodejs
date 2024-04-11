import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/AuthSelectors';
import { selectNotes } from '../../redux/water/waterSelectors';
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
  const [value, setValue] = useState(0);
  const notes = useSelector(selectNotes);

  const { waterRate } = useSelector(selectUser);

  useEffect(() => {
    const sum = notes.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    const rate = Math.round((sum / waterRate) * 100);
    setValue(rate);
  }, [notes, waterRate]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <WaterRatioContainer>
      <RatioScale>
        <h2>Today</h2>
        <RatioInput
          value={value}
          onChange={() => {}}
          type="range"
          min="0"
          max="100"
          readOnly
        />
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
