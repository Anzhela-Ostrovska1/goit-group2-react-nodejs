import { FooterBox, FooterBtn, FooterText } from './Footer.styled';
import { useState } from 'react';
import { TeamModal } from '../Home/TeamModal/TeamModal';

export const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <FooterBox>
      <FooterText>&#169; 2024 Developed by</FooterText>

      <FooterBtn
        onClick={() => {
          setModalOpen(true);
        }}
      >
        GoIT Students
      </FooterBtn>
      <TeamModal onClose={() => setModalOpen(false)} isShow={isModalOpen} />
    </FooterBox>
  );
};
