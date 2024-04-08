import { months } from '../../helpers/getMonthName';
import useOutsideClick from '../../hooks/useOutsideClick';
import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ currentDay, close }) => {
  const ref = useOutsideClick(close);

  const { date, percent, quantity, waterRate } = currentDay;
  const info = {
    dailyNorma: waterRate ?? 0,
    percent: percent ?? 0,
  };
  const monthName = months[date?.month - 1];
  const norma = info.dailyNorma / 1000;

  return (
    <DayStatsContainer ref={ref} $dayNumber={date.day}>
      <UpperElem>
        <p>
          <span>{date?.day}, </span>
          <span>{monthName}</span>
        </p>
      </UpperElem>
      <p>
        Daily norma : <span>{norma}L</span>
      </p>
      <p>
        Fulfillment of the daily norm : <span>{parseInt(info.percent)}%</span>
      </p>
      <p>
        How many servings of water : <span>{quantity ?? 0}</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
