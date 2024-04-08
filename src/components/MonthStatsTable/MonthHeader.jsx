import { getMonthName } from '../../helpers/getMonthName';
import sprite from '../../assets/images/sprite/sprite.svg';
import {
  MonthHeading,
  DivHeadingWrapper,
  DivMonthSwitcher,
} from './MonthStatsTable.styled';

const MonthHeader = ({ changeDirection, month, year }) => {
  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button
          className="arrow"
          onClick={() => changeDirection('back')}
          type="button"
        >
          <svg width="14" height="14">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </button>
        <p className="month__name">
          {getMonthName(month)}, {year}
        </p>
        <button
          className="arrow"
          onClick={() => changeDirection('forward')}
          type="button"
        >
          <svg width="14" height="14" transform="rotate(180)">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;
