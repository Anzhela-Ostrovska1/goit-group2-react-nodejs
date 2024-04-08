import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import {
  HomeContainer,
  HomeWrapper,
  LeftContainer,
  RightContainer,
} from './Home.styled';

export default function Home() {
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
