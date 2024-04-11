import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchMonthWaterThunk } from '../../redux/water/waterOperations';
import {
  selectIsLoading,
  selectMonthNote,
  selectNotes,
} from '../../redux/water/waterSelectors';
import { getNewDate } from '../../helpers/getNewDate';
import MonthCalendar from './MonthCalendar';
import MonthHeader from './MonthHeader';
import { DivContentWrapper } from './MonthStatsTable.styled';
import Loader from '../common/Loader/Loader';

const MonthStatsTable = () => {
  const monthData = useSelector(selectMonthNote);
  const isLoading = useSelector(selectIsLoading);
  const todayWaterList = useSelector(selectNotes);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  // Get the date from url params if they exists, otherwise call the function to get current date
  let [year, month] = searchParams.get('date')?.split('_') ?? getNewDate();

  useEffect(() => {
    dispatch(
      fetchMonthWaterThunk({ year: year.toString(), month: month.toString() }),
    );
  }, [dispatch, year, month]);

  const changeMonth = useCallback(
    // This function changes the month based on the given direction ('forward' or 'back')
    direction => {
      // Retrieve the new date based on the current year and month and the direction
      const newDate = getNewDate([+year, +month], direction);

      // Update the search params using the new date joined with an underscore
      setSearchParams({ date: newDate.join('_') });
    },
    // Dependencies for the useCallback hook
    [setSearchParams, year, month],
  );

  return (
    <DivContentWrapper>
      <MonthHeader changeDirection={changeMonth} month={month} year={year} />
      {isLoading ? <Loader /> : <MonthCalendar monthData={monthData} />}
    </DivContentWrapper>
  );
};

export default MonthStatsTable;
