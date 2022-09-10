import React from 'react'
import IntroHeader from './IntroHeader';
import IntroHero from './IntroHero';
import IntroSection from './IntroSection';
import IntroAboutUs from './IntroAboutUs';
import IntroFooter from './IntroFooter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    palette: {
        type: 'light',
        primary: {
          main: '#00838f',
        },
        secondary: {
          main: '#f50057',
        },
    },
});

const Intro = () => {
    return (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <IntroHeader />
            <IntroHero />
            <IntroSection />
            <IntroAboutUs />
            <IntroFooter />
        </ThemeProvider>
    </>
  )
}

export default Intro