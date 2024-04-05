import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../redux/water/waterSelectors';
import glass from '../../assets/images/background/home/svg/glass.svg';
import edit from '../../assets/images/background/home/svg/edit.svg';
import delite from '../../assets/images/background/home/svg/delete.svg';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import EditWaterModal from '../EditWaterModal/EditWaterModal';

import {
  AddButton,
  Amount,
  Time,
  Title,
  WaterList,
  WaterListItem,
  WaterPortion,
} from './TodayWaterList.styled';
import { useState } from 'react';

const testArray = [
  { id: '1', amount: '250ml', time: '14:00 PM' }, // delete
  { id: '2', amount: '250ml', time: '14:00 PM' },
  { id: '3', amount: '250ml', time: '14:00 PM' },
  { id: '4', amount: '250ml', time: '14:00 PM' },
  { id: '5', amount: '250ml', time: '14:00 PM' },
  { id: '6', amount: '250ml', time: '14:00 PM' },
];
const TodayWaterList = () => {
  const [waterNotes, setWaterNotes] = useState(testArray); // delete
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  // const dispatch = useDispatch(); open.
  const waterList = useSelector(selectNotes);
  console.log(waterList);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const deleteWaterNote = id => {
    setWaterNotes(prevNotes => prevNotes.filter(note => note.id !== id)); // delete
    // dispatch(deleteWaterThunk(id)); open.
  };

  return (
    <div>
      <div>
        <Title>Today</Title>
        <WaterList>
          {waterNotes.length > 0 && // waterList change waterNotes
            waterNotes.map(({ id, amount, time }) => {
              return (
                <>
                  {' '}
                  <WaterListItem key={id}>
                    <WaterPortion>
                      <img src={glass} alt="Icon glass" />
                      <Amount>{amount}</Amount>
                      <Time>{time}</Time>
                    </WaterPortion>
                    <div>
                      <button type="button" onClick={openEditModal}>
                        <img src={edit} alt="Icon glass" />
                      </button>
                      <button type="button" onClick={() => deleteWaterNote(id)}>
                        <img src={delite} alt="Icon glass" />
                      </button>
                    </div>
                  </WaterListItem>
                  {editModalOpen && (
                    <EditWaterModal
                      isOpen={editModalOpen}
                      onClose={closeEditModal}
                    />
                  )}
                </>
              );
            })}
        </WaterList>
      </div>

      <AddButton type="button" onClick={openModal}>
        <FaPlus /> Add Water
      </AddButton>
      {isModalOpen && (
        <AddWaterModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default TodayWaterList;
