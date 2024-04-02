import { useState } from 'react';
import Modal from 'react-modal';
import TimePicker from '../TimePicker/TimePicker';
import {
  Wrapper,
  Container,
  ButtonClose,
  MainTitle,
  BoldText,
  NormalText,
  ButtonCounter,
  AccentText,
  AmountInput,
  ButtonSubmit,
  AccentWrapper,
  CounterBox,
  TimeInput,
} from './AddWaterModal.styled';

Modal.setAppElement('#root');
export default function AddWaterModal({ isOpen, onClose, onAddWater }) {
  const [amount, setAmount] = useState(0);
  const [isEditTime, setIsEditTime] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [time, setTime] = useState(new Date());
  const handleEditTime = (e, type = '') => {
    let currentTime = new Date(time);

    switch (type) {
      case 'hour':
        currentTime.setHours(parseInt(e.target.value, 10));
        break;
      case 'minute':
        currentTime.setMinutes(Math.ceil(parseInt(e.target.value, 10) / 5) * 5);
        break;
      default:
        break;
    }
    console.log(currentTime);
    setTime(currentTime.getTime());
  };
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
      <Wrapper
        onClick={e => {
          if (e.target.closest('#selectTimeWrapper')) return;
          setIsEditTime(false);
        }}
      >
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
          {isEditTime ? (
            <TimePicker onChange={handleEditTime} value={time}></TimePicker>
          ) : (
            <TimeInput
              type="time"
              value={new Date(time).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
              onChange={() => {}}
              onFocus={() => setIsEditTime(true)}
            />
          )}
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
