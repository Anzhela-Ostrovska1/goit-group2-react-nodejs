import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TimePicker from '../TimePicker/TimePicker';
import sprite from '../../assets/images/sprite/horodiukIcons.svg';
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
  BottomBox,
  BoxPrevInfo,
  AccentRegularText,
  NormalTextWithoutMargin,
} from './EditWaterModal.styled';
import {
  editWaterThunk,
  fetchMonthWaterThunk,
} from '../../redux/water/waterOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNote } from '../../redux/water/waterSelectors';
import { useCallback } from 'react';
import { formatCurrentDate } from '../../helpers/formatDate';

Modal.setAppElement('#root');
export default function EditWaterModal({ onClose }) {
  const currentNote = useSelector(selectCurrentNote);

  const [amount, setAmount] = useState(currentNote.amount);
  const [isEditTime, setIsEditTime] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(currentNote.amount);
  const dispatch = useDispatch();
  const [time, setTime] = useState(currentNote.date);
  const { year, month } = formatCurrentDate();

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

    setTime(currentTime);
  };

  const handleEditWater = () => {
    dispatch(
      editWaterThunk({ _id: currentNote.id, amount, date: new Date(time) }),
    )
      .then(() => dispatch(fetchMonthWaterThunk({ year, month })))
      .then(onClose);
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
    const { value } = e.target;
    if (value === '') {
      setCurrentAmount('');
    } else {
      let numericValue = parseInt(value, 10);
      numericValue = isNaN(numericValue) || numericValue < 0 ? 0 : numericValue;
      setCurrentAmount(numericValue);
    }
  };

  const handleOffIsEditTime = e => {
    if (e.target.closest('#selectTimeWrapper')) return;

    setIsEditTime(false);
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = useCallback(() => {
    event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const getFormattedDate = dateString => {
    const date = new Date(dateString);
    const padTo2Digits = num => num.toString().padStart(2, '0');
    return `${padTo2Digits(date.getHours())}:${padTo2Digits(
      date.getMinutes(),
    )}`;
  };

  return ReactDOM.createPortal(
    <Wrapper onClick={handleOffIsEditTime}>
      <Container>
        <ButtonClose onClick={onClose}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </ButtonClose>
        <MainTitle>Edit the entered amount of water</MainTitle>
        <BoxPrevInfo>
          {' '}
          <svg width="36" height="36">
            <use href={`${sprite}#icon-glass`}></use>
          </svg>
          <AccentRegularText>{currentNote.amount}ml</AccentRegularText>
          <NormalTextWithoutMargin>
            {getFormattedDate(currentNote.date)}
          </NormalTextWithoutMargin>
        </BoxPrevInfo>
        <BoldText>Correct entered data:</BoldText>
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
            type="text"
            aria-label="Choose time"
            value={getFormattedDate(time)}
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
        <BottomBox>
          <AccentText>{amount}ml</AccentText>
          <ButtonSubmit onClick={handleEditWater} type="button">
            Save
          </ButtonSubmit>
        </BottomBox>
      </Container>
    </Wrapper>,
    document.getElementById('modal-root'),
  );
}
