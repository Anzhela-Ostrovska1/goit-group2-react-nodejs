import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../redux/water/waterSelectors';

import AddWaterModal from '../AddWaterModal/AddWaterModal';
import EditWaterModal from '../EditWaterModal/EditWaterModal';

import { DeleteEntryModal } from '../Home/DeleteEntryModal/DeleteEntryModal';

import { AddButton, Title, WaterList } from './TodayWaterList.styled';
import { useState } from 'react';
import { setCurrentNote } from '../../redux/water/waterSlice';

import WaterItem from '../WaterItem/WaterItem';

const TodayWaterList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [waterId, setWaterId] = useState('');

  const dispatch = useDispatch();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const waterList = useSelector(selectNotes);

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

  const openDeleteModal = id => {
    setDeleteModalOpen(true);
    setWaterId(id);
  };

  return (
    <div>
      <div>
        <Title>Today</Title>
        <WaterList>
          {waterList.length > 0 &&
            waterList.map(({ _id: id, amount, date }) => {
              return (
                <WaterItem
                  key={id}
                  id={id}
                  amount={amount}
                  date={date}
                  onDelete={openDeleteModal}
                  onEdit={openEditModal}
                />
              );
            })}
          {editModalOpen && (
            <EditWaterModal isOpen={editModalOpen} onClose={closeEditModal} />
          )}
        </WaterList>
        {/* Код повторюється з тим який вище*/}
        {/* {editModalOpen && (
          <EditWaterModal
            isOpen={editModalOpen}
            onClose={closeEditModal} // потрібно доопрацювати editModal і додати props
          />
        )} */}
        {deleteModalOpen && (
          <DeleteEntryModal
            isShow={deleteModalOpen}
            onClose={closeDeleteModal}
            id={waterId}
          />
        )}
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
