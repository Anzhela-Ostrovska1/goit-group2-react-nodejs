import styled from '@emotion/styled';

export const DivContentWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`;

export const MonthHeading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.color.primaryBlack};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const DivHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivMonthSwitcher = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    height: 14px;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

    &:hover {
      transform: scale(1.3);
    }

    &-right {
      margin-bottom: 6px;
    }

    &-left {
      margin-top: 3px;
    }
  }
  .arrow-right-disabled:is(:hover, :focus) {
    transform: none;
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.color.primaryAccent};
  }
`;

export const UlMonth = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`;

export const LiDayStyles = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0em;

  cursor: pointer;
  span {
    display: block;
  }
  .day {
    width: 32px;
    height: 32px;

    padding: ${({ $percentage }) => ($percentage < 100 ? '7px 6px' : '7px')};
    background: ${({ theme }) => theme.color.primaryWhite};
    border-radius: 50%;
    border: none;
    border: ${({ $percentage }) =>
      $percentage < 100 ? '1px solid #ff9d43' : 'none'};
    box-shadow: ${({ $isActive }) =>
      $isActive ? ' 0px 2px 4px 0px #407BFF4D' : 'none'};
    font-size: 14px;
    line-height: 18px;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .percentage {
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.secondaryLightBlue};
  }
`;
