import styled from '@emotion/styled';
import { ListItem } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: 0,
    alignItems: 'baseline',
  },
  columnList: {
    '@media (max-width: 1000px)': {
      display: 'none'
    },
  },
  columnHeading: {
    fontWeight: 'bold'
  },
  ContainerStyle: {
    backgroundColor: '#106897',
    color: '#fff',
    padding: '2rem 0 3rem',
    position: 'relative'
  },
  GridItemStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  BoxTextStyle: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 400,
    margin: 0,
  },
  SocialIconsStyle: {
    display: 'flex',
    gap: '1rem',
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.875rem',
    marginBlock: '1rem',
    '& > li': {
      padding: 0
    }
  },
  LinkListStyle: {
    textTransform: 'uppercase',
    fontSize: '10px',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  ListItemStyle: {
    paddingLeft: 0,
    alignItems: 'baseline',
    textDecoration: 'none',
    color: 'white',
  },
  ListItemIcons: {
    paddingRight: '0.625rem',
    minWidth: 'auto',
  }

}));

export default useStyles;
