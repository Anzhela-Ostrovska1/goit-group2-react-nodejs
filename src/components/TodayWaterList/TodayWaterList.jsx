import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../redux/water/waterSelectors';
import glass from '../../assets/images/background/home/svg/glass.svg';
import edit from '../../assets/images/background/home/svg/edit.svg';
import delite from '../../assets/images/background/home/svg/delete.svg';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import EditWaterModal from '../EditWaterModal/EditWaterModal';

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
import { formatDate } from '../../helpers/formatDate';

const TodayWaterList = () => {
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
  const openEditModal = ({ amount, date, _id }) => {
    setEditModalOpen(true);
    dispatch(setCurrentNote({ amount, date, _id }));
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  return (
    <div>
      <div>
        <Title>Today</Title>
        <WaterList>
          {waterList.length > 0 && // waterList change waterNotes
            waterList.map(({ _id, amount, date }) => {
              return (
                <>
                  <WaterListItem key={_id}>
                    <WaterPortion>
                      <img src={glass} alt="Icon glass" />
                      <Amount>{amount} ml</Amount>
                      <Time>{formatDate(date)}</Time>
                    </WaterPortion>
                    <div>
                      <EditButton
                        type="button"
                        onClick={() => openEditModal({ _id, amount, date })}
                      >
                        <img src={edit} alt="Icon glass" />
                      </EditButton>
                      <DeleteButton type="button" onClick={openDeleteModal}>
                        <img src={delite} alt="Icon glass" />
                      </DeleteButton>
                      {editModalOpen && (
                        <EditWaterModal
                          isOpen={editModalOpen}
                          onClose={closeEditModal} // потрібно доопрацювати editModal і додати props
                        />
                      )}
                      {deleteModalOpen && (
                        <DeleteEntryModal
                          onShow={deleteModalOpen}
                          onClose={closeDeleteModal}
                          id={_id}
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
