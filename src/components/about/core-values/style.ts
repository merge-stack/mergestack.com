import { makeStyles } from '@mui/styles';
import LogoWaterMark from 'public/assets/images/Logo-WaterMark.png';

export const useStyles = makeStyles({
  valuesRoot: {
    backgroundColor: '#f7f7f9',
    paddingTop: '1rem',
  },
  valuesBannerContainer: {
    backgroundImage: `url(${LogoWaterMark.src})`,
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#F7F7F9',
    paddingBlock: '3rem !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  valuesTitleWrapper: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    },
  },
  valuesTitle: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
    },
  },
  valuesHeading: {
    fontWeight: 600,
    width: '65%',
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '1.5rem',
      textAlign: 'center',
      paddingInline: '1rem',
    },
  },
  valuesIcon: {
    fill: '#4FB0E3',
    width: '12px',
    height: '12px',
  },
  valuesIconBoxContainer: {
    paddingBlock: '3rem',
  },
  valuesIconBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '0.25rem',
    paddingBlock: '1rem',
    '@media (max-width: 600px)': {
      boxShadow: '0 0 5px #ccc',
      padding: '1rem',
      borderRadius: '10px',
      alignItems: 'center',
    },
  },
  IconBoxHeading: {
    fontWeight: 600,
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
  IconBoxTagline: {
    color: '#00000099',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
  icon: {
    fontSize: 48,
  },
});
