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

// import anzhelaOstrovska from '../../../assets/images/team/anzhelaOstrovska.jpg';
// import yaromatv from '../../../assets/images/team/yaromatv.jpg';
import ihorBerezhnyi from '../../../assets/images/team/ihorBerezhnyi.jpg';
// import olenaUser1982 from '../../../assets/images/team/OlenaUser1982.jpg';
// import oksanaKorsun from '../../../assets/images/team/oksanaKorsun.jpg';
// import tauruS111 from '../../../assets/images/team/tauruS111.jpg';
// import ninel35 from '../../../assets/images/team/ninel35.jpg';

const team = [
  {
    name: `Anzhela Ostrovska`,
    // photo: anzhelaOstrovska,
    role: `Front-end Team Lead`,
    social: {
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/Anzhela-Ostrovska1',
    },
  },

  {
    name: `yaromatv`,
    // photo: yaromatv,
    role: `Back-end Team Lead`,
    social: {
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/yaromatv',
    },
  },

  {
    name: `Ihor Berezhnyi`,
    photo: ihorBerezhnyi,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/ihor-berezhnyi/',
      github: 'https://github.com/iberezhnyi',
    },
  },

  {
    name: `OlenaUser1982`,
    // photo: olenaUser1982,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/OlenaUser1982',
    },
  },

  {
    name: `Oksana Korsun`,
    // photo: oksanaKorsun,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/OksanaKorsun',
    },
  },
  {
    name: `TauruS111`,
    // photo: tauruS111,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/TauruS111',
    },
  },
  {
    name: `Ninel35`,
    // photo: ninel35,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/',
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
                  <SocialLink
                    href={item.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-linkedin`}></use>
                    </svg>
                  </SocialLink>
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
