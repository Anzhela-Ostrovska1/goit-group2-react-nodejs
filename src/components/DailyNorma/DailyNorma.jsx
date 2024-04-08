import React, { useState } from 'react';
import { DailyNormaContainer, DailyNormaWrapper } from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <p>1.5 L</p>
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
