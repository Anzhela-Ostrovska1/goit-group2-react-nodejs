export const theme = {
  lightTheme: {
    // Colors
    color: {
      primaryWhite: '#FFFFFF',
      primaryBlack: '#2F2F2F',
      primaryAccent: '#407BFF',
      secondaryWhite: '#ecf2ff',
      secondaryRed: '#ef5050',
      secondaryLightBlue: '#9ebbff',
      secondaryYellow: '#ff9d43',
      secondaryPowderBlue: '#d7e3ff',
    },
    // Animation (transition) on hover & focus
    boxShadowforButton: {
      normalButton: '0 4px 8px rgba(64, 123, 255, 0.34)',
      hoverButton: '0 4px 14px rgba(64, 123, 255, 0.54)',
      activeButton: 'none',
    },
    transition: {
      main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
      modal: '300ms ease-in-out',
    },
    modalBoxShadow: {
      modal: '0 4px 14px rgba(64, 123, 255, 0.3)',
    },
    // Breakpoints
    breakpoint: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1440px',
    },
  },
};

/* Usage example:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.input};
  

  &:hover, &:focus {
    color: ${({theme}) => theme.color.orangeFirst};
    background-color: ${({theme}) => theme.color.inputActive};
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
    color: ${({theme}) => theme.color.black};
    background-color: ${({theme}) => theme.color.accent};
  }
`
*/
