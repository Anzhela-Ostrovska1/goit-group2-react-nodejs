import React from 'react';
import { DailyNormaContainer, DailyNormaWrapper } from './DailyNorma.styled';

const DailyNorma = () => {
  const editFormOpen = () => {
    console.log('Open modal'); //логіка відкриття модалки
  };

  return (
    <div>
      <DailyNormaContainer>
        <h2>My daily norma:</h2>
        <DailyNormaWrapper>
          <p>1.5 L</p>
          <button onClick={editFormOpen} type="button">
            Edit
          </button>
        </DailyNormaWrapper>
      </DailyNormaContainer>
    </div>
  );
};

export default DailyNorma;
