import styled from 'styled-components';
import {
  calculateBoxPositionX,
  calculateBoxPositionY,
} from '../../helpers/calculateBoxPosition';

export const DayStatsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({ $dayNumber }) => `${calculateBoxPositionY($dayNumber, 'sm')}px`}
  );
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 280px;
  height: 188px;
  padding: 24px 13px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  p {
    color: #2f2f2f;
    line-height: 1.25;

    span {
      color: #407bff;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 768px) {
    top: -190px;
    left: 0;
    transform: translate(
      ${({ $dayNumber }) => `${calculateBoxPositionX($dayNumber, 'md')}px`},
      ${({ $dayNumber }) => `${calculateBoxPositionY($dayNumber, 'md')}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({ $dayNumber }) => `${calculateBoxPositionX($dayNumber, 'xl')}px`},
      ${({ $dayNumber }) => `${calculateBoxPositionY($dayNumber, 'md')}px`}
    );
  }
`;

export const UpperElem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: #407bff;
    font-size: 16px;
    line-height: 1.25;
  }
`;
