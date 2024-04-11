import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  Item,
  List,
  Name,
  Photo,
  Role,
  SocialLink,
  TeamBox,
  TextBox,
} from './TeamModal.styled';

import Anzhela from '../../../assets/images/team/Anzhela.jpg';
import Yaroslav from '../../../assets/images/team/Yaroslav.jpg';
import ihorBerezhnyi from '../../../assets/images/team/ihorBerezhnyi.jpg';
import photo2 from '../../../assets/images/team/photo2.jpg';
import Oksana from '../../../assets/images/team/Oksana.jpg';
import Yuriy from '../../../assets/images/team/Yuriy.jpg';
import photo3 from '../../../assets/images/team/photo3.jpg';

const team = [
  {
    name: `Anzhela Ostrovska`,
    photo: Anzhela,
    role: `Front-end Team Lead`,
    social: {
      // linkedin: '',
      github: 'https://github.com/Anzhela-Ostrovska1',
    },
  },

  {
    name: `Yaroslav Matvieiev`,
    photo: Yaroslav,
    role: `Back-end Team Lead`,
    social: {
      // linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/yaromatv',
    },
  },

  {
    name: `Ihor Berezhnyi`,
    photo: ihorBerezhnyi,
    role: `Developer`,
    social: {
      // linkedin: 'https://www.linkedin.com/in/ihor-berezhnyi/',
      github: 'https://github.com/iberezhnyi',
    },
  },

  {
    name: `Olena Horodiuk`,
    photo: photo2,
    role: `Developer`,
    social: {
      // linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/OlenaUser1982',
    },
  },

  {
    name: `Oksana Korsun`,
    photo: Oksana,
    role: `Developer`,
    social: {
      // linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/OksanaKorsun',
    },
  },
  {
    name: `Yuriy Berezovskyy`,
    photo: Yuriy,
    role: `Developer`,
    social: {
      // linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/TauruS111',
    },
  },
  {
    name: `Nina Raschupkina`,
    photo: photo3,
    role: `Developer`,
    social: {
      // linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/Ninel35',
    },
  },
];

export const TeamModal = ({ onClose, isShow }) => {
  const stylesPadding = '32px 24px 24px';

  return (
    <BaseModalWindow
      onClose={onClose}
      isShow={isShow}
      stylesPadding={stylesPadding}
      title="Our team"
    >
      <TeamBox>
        <List>
          {team.map(item => (
            <Item key={item.name}>
              <Photo src={item.photo} alt={item.name} />
              <TextBox>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
                <div>
                  {/* <SocialLink
                    href={item.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-linkedin`}></use>
                    </svg>
                  </SocialLink> */}
                  <SocialLink
                    href={item.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-github`}></use>
                    </svg>
                  </SocialLink>
                </div>
              </TextBox>
            </Item>
          ))}
        </List>
      </TeamBox>
    </BaseModalWindow>
  );
};
