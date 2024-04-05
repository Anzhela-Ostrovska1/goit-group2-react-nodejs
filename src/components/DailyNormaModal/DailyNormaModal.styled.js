import styled from '@emotion/styled';

export const DailyNormaModalContainer = styled.div`
  width: 280px;
  height: 816px;
  top: 40px;
  left: 20px;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    left: 32px;
    padding: 32px 24px 32px 24px;
  }

  @media screen and (min-width: 1140px) {
    width: 592px;
    height: 712px;
    top: 44px;
    left: 424px;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  .headerDaily {
    display: flex;
    justify-content: space-between;
    height: 32px;
  }

  .formula {
    display: flex;
    flex-direction: column;
    height: 64px;
    gap: 16px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 24px;
    }
  }

  .formulaText {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    display: flex;
    gap: 4px;
  }
  .formulaSpan {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #407bff;
  }
  .formulaStar {
    color: #407bff;
  }

  .formulaDescription {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    padding: 10px;
    border-radius: 10px;
    border: solid 1px #d7e3ff;
  }
  .formulaContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }

  .checkBox {
    height: 20px;
    gap: 24px;
    opacity: 0px;
    display: flex;
  }
  .checkBox input {
    border-color: #407bff;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .inputDescription {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
  .requiredAmount {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 6px;
  }
  .amount {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #407bff;
  }
  .amountDescription {
    width: 190px;
  }
  .inputForm {
    height: 44px;
    border: solid 1px #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
  }
  .saveButton {
    color: #ffffff;
    background: #407bff;
    height: 36px;
    padding: 8px 30px 8px 30px;
    gap: 10px;
    border-radius: 10px;
    border: 0;
    box-shadow: 0px 4px 8px 0px #407bff57;
    @media screen and (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
  }

  input::placeholder {
    color: #407bff;
    size: 16px;
  }
`;
