import { MainComponent } from '../../components/Main/MainComponent/MainComponent';
import { Wrapper, Section } from './Welcome.styled';
export default function Welcome() {
  console.log();
  return (
    <Wrapper>
      <Section>
        <MainComponent />
      </Section>
    </Wrapper>
  );
}
