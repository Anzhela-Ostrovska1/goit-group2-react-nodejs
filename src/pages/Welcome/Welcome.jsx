import { MainComponent } from '../../components/Main/MainComponent/MainComponent';
import { Wrapper, Section } from './Welcome.styled';
import AddWaterModal from '../../components/AddWaterModal/AddWaterModal.jsx';
import EditWaterModal from '../../components/EditWaterModal/EditWaterModal.jsx';
export default function Welcome() {
  return (
    <>
      <div>
        <AddWaterModal />
        <EditWaterModal />
      </div>
      <Wrapper>
        <Section>
          <MainComponent />
        </Section>
      </Wrapper>
    </>
  );
}