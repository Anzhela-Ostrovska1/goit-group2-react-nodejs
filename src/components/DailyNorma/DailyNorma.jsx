import React, { useState } from 'react';
import { DailyNormaContainer, DailyNormaWrapper } from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/AuthSelectors';

const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { waterRate } = useSelector(selectUser);
  const waterNorma = waterRate / 1000;
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <DailyNormaContainer>
        <h2>My daily norma:</h2>
        <DailyNormaWrapper>
          <p> {waterNorma} L</p>
          <button type="button" onClick={openModal}>
            Edit
          </button>
          {isModalOpen && (
            <DailyNormaModal isOpen={isModalOpen} onClose={closeModal} />
          )}
        </DailyNormaWrapper>
      </DailyNormaContainer>
    </div>
  );
};

export default DailyNorma;
