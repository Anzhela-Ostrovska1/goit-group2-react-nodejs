import sprite from '../../assets/images/sprite/horodiukIcons.svg';

import { Select, Wrapper, SelectBox, Icon } from './TimePicker.styled';
export default function TimePicker({ onChange, value }) {
  const hours = Array.from(new Array(24), (val, index) => index);
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const valueDate = new Date(value);

  let valueHour = valueDate.getHours();
  let valueMinute = valueDate.getMinutes();

  const closestMinute = minutes.reduce(
    (prev, curr) =>
      curr >= valueMinute
        ? prev === null ||
          Math.abs(curr - valueMinute) < Math.abs(prev - valueMinute)
          ? curr
          : prev
        : prev,
    null,
  );
  if (closestMinute === null) {
    valueHour = (valueHour + 1) % 24;
    valueMinute = 0;
  } else {
    valueMinute = closestMinute;
  }

  return (
    <Wrapper id="selectTimeWrapper">
      <SelectBox>
        <Select onChange={e => onChange(e, 'hour')} value={valueHour}>
          {hours.map(hour => (
            <option key={hour} value={hour}>
              {hour.toString().padStart(2, '0')}
            </option>
          ))}
        </Select>
        <Icon width="24" height="24">
          <use href={`${sprite}#icon-arrow`}></use>
        </Icon>
      </SelectBox>
      :
      <SelectBox>
        <Select onChange={e => onChange(e, 'minute')} value={valueMinute}>
          {minutes.map(minute => (
            <option key={minute} value={minute}>
              {minute.toString().padStart(2, '0')}
            </option>
          ))}
        </Select>
        <Icon width="24" height="24">
          <use href={`${sprite}#icon-arrow`}></use>
        </Icon>
      </SelectBox>
    </Wrapper>
  );
}
