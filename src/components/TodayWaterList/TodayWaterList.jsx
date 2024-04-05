import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const TodayWaterList = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  return (
    <div>
      <div>
        <h2>Today</h2>
      </div>
      <div>{/* <use href={}></use> */}</div>
      <div>
        <button>
          <FaPlus /> Add Water
        </button>
      </div>
    </div>
  );
};

export default TodayWaterList;
