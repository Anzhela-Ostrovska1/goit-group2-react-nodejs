import { useState } from 'react';
import Modal from 'react-modal';
import {
  Wrapper,
  Container,
  ButtonClose,
  MainTitle,
  BoldText,
  NormalText,
  ButtonCounter,
  AccentText,
  TimeInput,
  AmountInput,
  ButtonSubmit,
  AccentWrapper,
  CounterBox,
} from './AddWaterModal.styled';

Modal.setAppElement('#root');
export default function AddWaterModal({ isOpen, onClose, onAddWater }) {
  const [amount, setAmount] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [time, setTime] = useState(Date.now());
  const handleAddWater = () => {};
  const handleClose = () => {
    onClose();
  };
  const incrementAmount = () => {
    setAmount(amount + 50);
    setCurrentAmount(amount + 50);
  };
  const decrementAmount = () => {
    if (amount - 50 < 0) {
      setAmount(0);
      setCurrentAmount(0);
      return;
    }
    setAmount(amount - 50);
    setCurrentAmount(amount - 50);
  };
  const handleBlur = () => {
    setAmount(currentAmount);
  };
  const handleChange = e => {
    const value = parseInt(e.target.value > 0 ? e.target.value : 0, 10);
    setCurrentAmount(value);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <Wrapper>
        <Container>
          <ButtonClose onClick={handleClose}>X</ButtonClose>
          <MainTitle>Add water</MainTitle>
          <BoldText>Choose a value:</BoldText>
          <NormalText>Amount of water:</NormalText>
          <CounterBox>
            <ButtonCounter onClick={decrementAmount}>-</ButtonCounter>
            <AccentWrapper>
              <AccentText>{amount}ml</AccentText>
            </AccentWrapper>
            <ButtonCounter onClick={incrementAmount}>+</ButtonCounter>
          </CounterBox>
          <NormalText>Recording time:</NormalText>
          <TimeInput type="time"></TimeInput>
          <BoldText>Enter the value of the water used:</BoldText>
          <AmountInput
            value={currentAmount}
            onBlur={handleBlur}
            onChange={handleChange}
            type="number"
          ></AmountInput>
          <AccentText>{amount}ml</AccentText>
          <ButtonSubmit onClick={handleAddWater} type="button">
            Save
          </ButtonSubmit>
        </Container>
      </Wrapper>
    </Modal>
  );
}
