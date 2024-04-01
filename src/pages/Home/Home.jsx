import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import { HomeContainer } from './Home.styled';

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <div></div>
      </HomeContainer>
    </div>
  );
}
