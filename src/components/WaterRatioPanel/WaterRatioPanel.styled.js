import styled from '@emotion/styled';

export const WaterRatioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    gap: 23px;
    width: 592px;
  }
`;

export const RatioScale = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }

  h2 {
    color: #407bff;
    font-weight: 400;
    size: 18px;
    line-height: 24px;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
  }
`;

export const RatioInput = styled.input`
  &[type='range'] {
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${props => props.value}%,
      #d7e3ff ${props => props.value}%,
      #d7e3ff 100%
    );
    border-radius: 10px;
    appearance: none;
  }

  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border-radius: 50%;
    border: solid 1px #407bff;
    appearance: none;
  }

  @media screen and (min-width: 768px) {
    width: 325px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`;

export const WaterPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #407bff;
    line-height: 16px;
    font-size: 12px;
    &::before {
      content: '|';
      color: #d7e3ff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:nth-child(2) {
      color: #407bff;
      line-height: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const AddWaterButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: #407bff;
  border-radius: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 4px 8px 0px #407bff57;
  border: none;
  color: #ffffff;
  font-weight: 500;
  size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px 0px #407bff34;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`;
