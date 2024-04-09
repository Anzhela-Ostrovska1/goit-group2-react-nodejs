import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  HomeContainer,
  HomeWrapper,
  LeftContainer,
  RightContainer,
} from './Home.styled';
import { fetchTodayWaterThunk } from '../../redux/water/waterOperations';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayWaterThunk());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftContainer>
          <DailyNorma />
          <WaterRatioPanel />
        </LeftContainer>
        <RightContainer>
          <TodayWaterList />
          <MonthStatsTable />
        </RightContainer>
      </HomeContainer>
    </HomeWrapper>
  );
}
