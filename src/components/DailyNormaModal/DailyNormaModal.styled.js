import styled from '@emotion/styled';

export const DailyNormaModalContainer = styled.div`
  width: 280px;
  height: 816px;
  top: 40px;
  left: 20px;
  padding: 24px 12px 24px 12px;
  gap: 24px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;

  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  .headerDaily {
    display: flex;
    width: 256px;
    height: 32px;
    gap: 40px;
    opacity: 0px;
  }

  .formula {
    display: inline-block;
    margin-top: 16px;
    width: 236px;
    height: 64px;
    gap: 16px;
    opacity: 0px;
  }

  .text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #407bff;
  }

  .value {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;

    width: 256px;
    height: 100px;
    padding: 10px;
    /* gap: 10px; */
    border-radius: 10px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

    padding-top: 20px;
    padding-bottom: 20px;
  }

  .checkBox {
    width: 206px;
    height: 20px;
    gap: 24px;
    opacity: 0px;
    display: flex;
    margin-bottom: 10px;
  }

  .layout {
    display: flex;
    width: 253px;
    height: 40px;
    gap: 6px;
    opacity: 0px;
    margin-top: 15px;
  }
  .amount {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
  .inputForm {
    width: 256px;
    height: 44px;
    margin-bottom: 20px;
  }
  .button {
    color: #ffffff;
    background: #407bff;
    width: 256px;
    height: 36px;
    padding: 8px 30px 8px 30px;
    gap: 10px;
    /* border-radius: 10px 0px 0px 0px; */
    opacity: 0px;
  }
`;
