import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme : Theme) => ({
  teamRoot: {
    paddingBlock: '3rem',
    backgroundColor: theme.palette.custom.main,
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  teamHeading: {
    marginBottom: 0,
    fontWeight: 600,
    textAlign: 'center',
  },
  teamImageWrapper: {
    borderRadius: '15px',
    padding: '0.5rem 0.5rem 1rem',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  teamImage: {
    borderRadius: '15px',
    maxWidth: '100%',
  },
  teamTitleWrapper: {
    padding: '0.5rem',
  },
  teamTitle: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  teamDesignation: {
    color: '#777',
  },
  teamViewMore: {
    border: 'none',
    borderBottom: '1px solid #777',
    borderRadius: '0',
    width: '100%',
    justifyContent: 'start',
    padding: '1.25rem 0',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: 'transparent !important',

    '& > span > svg': {
      fill: '#777',
    },
  },
}));
