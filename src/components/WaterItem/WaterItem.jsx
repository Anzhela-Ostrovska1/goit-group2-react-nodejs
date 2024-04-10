import {
  Amount,
  DeleteButton,
  EditButton,
  Time,
  WaterListItem,
  WaterPortion,
} from './WaterItem.styled';
import { formatDate } from '../../helpers/formatDate';

import glass from '../../assets/images/background/home/svg/glass.svg';
import edit from '../../assets/images/background/home/svg/edit.svg';
import delite from '../../assets/images/background/home/svg/delete.svg';

const WaterItem = ({ id, amount, date, onDelete, onEdit }) => {
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

export default WaterItem;
