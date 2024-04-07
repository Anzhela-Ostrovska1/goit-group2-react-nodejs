import { useCallback, useState } from 'react';
import { LiDayStyles, UlMonth } from './MonthStatsTable.styled';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';

const MonthCalendar = ({ monthData }) => {
  const [currentDay, setCurrentDay] = useState(null);
  console.log('monthData', monthData);

  const closeDayStats = useCallback(() => {
    setCurrentDay(null);
  }, []);

  return (
    <UlMonth>
      {currentDay && (
        <DaysGeneralStats currentDay={currentDay} close={closeDayStats} />
      )}
      {monthData.map(data => (
        <LiDayStyles
          onClick={() => setCurrentDay(data)}
          $percentage={data.percent}
          $isActive={currentDay?.date.day === data.date.day}
          key={data.date.day}
        >
          <span className="day">{data.date.day}</span>
          <span className="percentage">{parseInt(data.percent) || 0}&#37;</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;
