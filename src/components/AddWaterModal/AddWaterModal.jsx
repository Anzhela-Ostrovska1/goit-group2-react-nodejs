import { useState } from 'react';
import Modal from 'react-modal';
import TimePicker from '../TimePicker/TimePicker';
import sprite from '../../assets/images/sprite/horodiukIcons.svg';
import css from './AddWaterModal.module.css';
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

    setTime(currentTime.getTime());
  };
  const handleAddWater = () => {
    console.log({ amount, date: Date(time) });
  };
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
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      overflow: 'scroll',
    },

    content: {
      // transform: 'translateX(-50%)',
      position: 'absolute',
      padding: '24px 12px',
      inset: '40px auto auto 50%',
      top: '0',
      border: 'none',
      borderRadius: '10px',
      width: '280px',
      backgroundColor: '#fff',

      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
    },
  };

  return (
    <Modal
      className={css.addWaterModal}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle}
    >
      <Wrapper
        onClick={e => {
          if (e.target.closest('#selectTimeWrapper')) return;
          setIsEditTime(false);
        }}
      >
        <Container>
          <ButtonClose onClick={handleClose}>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </ButtonClose>
          <MainTitle>Add water</MainTitle>
          <BoldText>Choose a value:</BoldText>
          <NormalText>Amount of water:</NormalText>
          <CounterBox>
            <ButtonCounter onClick={decrementAmount}>
              <svg width="44" height="44">
                <use href={`${sprite}#icon-minus`}></use>
              </svg>
            </ButtonCounter>
            <AccentWrapper>
              <AccentText>{amount}ml</AccentText>
            </AccentWrapper>
            <ButtonCounter onClick={incrementAmount}>
              <svg width="44" height="44">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </ButtonCounter>
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
