import sprite from 'src/assets/images/sprite/sprite.svg';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Heading,
  Icon,
  Title,
  ListTitle,
  List,
  Item,
  Button,
} from './WaterConsumptionTracker.styled';
export const WaterConsumptionTracker = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  const benefits = [
    {
      text: 'Habit drive',
      id: `${sprite}#icon-calendar-days`,
    },
    {
      text: 'View statistics',
      id: `${sprite}#icon-presentation-chart-bar`,
    },
    {
      text: 'Personal rate setting',
      id: `${sprite}#icon-wrench-screwdriver`,
    },
  ];

  return (
    <Container>
      <Heading>Water consumption tracker</Heading>
      <Title>Record daily water intake and track</Title>
      <ListTitle>Tracker Benefits</ListTitle>
      <List>
        {benefits.map(({ id, text }, index) => (
          <Item key={index}>
            <Icon>
              <use href={id}></use>
            </Icon>
            {text}
          </Item>
        ))}
      </List>
      <Button type="button" onClick={handleClick}>
        Try tracker
      </Button>
    </Container>
  );
};
