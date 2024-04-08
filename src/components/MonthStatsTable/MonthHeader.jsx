import { getMonthName } from '../../helpers/getMonthName';
import sprite from '../../assets/images/sprite/sprite.svg';
import {
  MonthHeading,
  DivHeadingWrapper,
  DivMonthSwitcher,
} from './MonthStatsTable.styled';

const MonthHeader = ({ changeDirection, month, year }) => {
  function compareWithCurrentDate(month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    return (
      Number(year) > currentYear ||
      (Number(year) === currentYear && Number(month) >= currentMonth)
    );
  }

  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button
          className="arrow arrow-left"
          onClick={() => changeDirection('back')}
          type="button"
        >
          <svg fill="#407BFF" width="14" height="14">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </button>
        <p className="month__name">
          {getMonthName(month)}, {year}
        </p>
        <button
          // className="arrow arrow-right"
          className={`arrow arrow-right ${
            compareWithCurrentDate(month, year) ? 'arrow-right-disabled' : ''
          }`}
          onClick={() => changeDirection('forward')}
          type="button"
          disabled={compareWithCurrentDate(month, year)}
        >
          <svg
            fill={`${
              compareWithCurrentDate(month, year) ? '#9ebbff' : '#407BFF'
            }`}
            width="14"
            height="14"
            transform="rotate(180)"
          >
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;
