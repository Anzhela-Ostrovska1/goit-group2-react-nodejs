import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentNote,
  selectNotes,
} from '../../redux/water/waterSelectors';
import glass from '../../assets/images/background/home/svg/glass.svg';
import edit from '../../assets/images/background/home/svg/edit.svg';
import delite from '../../assets/images/background/home/svg/delete.svg';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import EditWaterModal from '../EditWaterModal/EditWaterModal';
// import { deleteWaterThunk } from '../../redux/water/waterOperations';
import { DeleteEntryModal } from '../Home/DeleteEntryModal/DeleteEntryModal';

import {
  AddButton,
  Amount,
  DeleteButton,
  EditButton,
  Time,
  Title,
  WaterList,
  WaterListItem,
  WaterPortion,
} from './TodayWaterList.styled';
import { useState } from 'react';
import { setCurrentNote } from '../../redux/water/waterSlice';

const testArray = [
  { id: '1', amount: '250ml', time: '14:00 PM' },
  { id: '2', amount: '250ml', time: '14:00 PM' },
  { id: '3', amount: '250ml', time: '14:00 PM' },
  { id: '4', amount: '250ml', time: '14:00 PM' },
  { id: '5', amount: '250ml', time: '14:00 PM' },
  { id: '6', amount: '250ml', time: '14:00 PM' },
]; // delete
const TodayWaterList = () => {
  const [waterNotes, setWaterNotes] = useState(testArray); // delete
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
  const openEditModal = ({ amount, date, id }) => {
    setEditModalOpen(true);
    dispatch(setCurrentNote({ amount, date, id }));
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // const openDeleteModal = () => {
  //   setDeleteModalOpen(true);
  // };

  const deleteWaterNote = id => {
    setWaterNotes(prevNotes => prevNotes.filter(note => note.id !== id)); // delete
    //   dispatch(deleteWaterThunk(id)); // open.
  };

  return (
    <div>
      <div>
        <Title>Today</Title>
        <WaterList>
          {waterNotes.length > 0 && // waterList change waterNotes
            waterNotes.map(({ id, amount, date }) => {
              return (
                <>
                  <WaterListItem key={id}>
                    <WaterPortion>
                      <img src={glass} alt="Icon glass" />
                      <Amount>{amount}</Amount>
                      <Time>{date}</Time>
                    </WaterPortion>
                    <div>
                      <EditButton
                        type="button"
                        onClick={() => openEditModal({ id, amount, date })}
                      >
                        <img src={edit} alt="Icon glass" />
                      </EditButton>
                      <DeleteButton
                        type="button"
                        // onClick={openDeleteModal}
                        onClick={() => deleteWaterNote(id)}
                      >
                        <img src={delite} alt="Icon glass" />
                      </DeleteButton>
                      {isModalOpen && (
                        <DeleteEntryModal
                          isOpen={deleteModalOpen}
                          onClose={closeDeleteModal}
                        />
                      )}
                    </div>
                  </WaterListItem>
                </>
              );
            })}
          {editModalOpen && (
            <EditWaterModal isOpen={editModalOpen} onClose={closeEditModal} />
          )}
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
