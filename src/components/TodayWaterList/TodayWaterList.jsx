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
  const openEditModal = ({ amount, date, _id }) => {
    setEditModalOpen(true);
    dispatch(setCurrentNote({ amount, date, _id }));
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
    <WaterListItem key={id}>
      <WaterPortion>
        <img src={glass} alt="Icon glass" />
        <Amount>{amount} ml</Amount>
        <Time>{formatDate(date)}</Time>
      </WaterPortion>
      <div>
        <EditButton type="button" onClick={() => onEdit({ id, amount, date })}>
          <img src={edit} alt="Icon glass" />
        </EditButton>
        <DeleteButton type="button" onClick={() => onDelete(id)}>
          <img src={delite} alt="Icon glass" />
        </DeleteButton>
      </div>
    </WaterListItem>
  );
};
              );
            })}
          {editModalOpen && (
            <EditWaterModal isOpen={editModalOpen} onClose={closeEditModal} />
          )}
        </WaterList>

        {editModalOpen && (
          <EditWaterModal isOpen={editModalOpen} onClose={closeEditModal} />
        )}
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
