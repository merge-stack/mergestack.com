import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

enum BadgeSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface TextBadgeProps {
  size: string;
  text: string;
}

const useStyles = makeStyles(() => ({
  root: (props: TextBadgeProps) => ({
    width: 'auto',
    backgroundColor: '#F5F5F5',
    display: 'inline-block',
    padding: '0.5rem',
    borderRadius: '4px',
    '& > * ': {
      fontSize: getSize(props.size),
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  }),
}));

const getSize = (size: TextBadgeProps['size']) => {
  switch (size) {
    case BadgeSize.SMALL:
      return '9px';
    case BadgeSize.MEDIUM:
      return '14px';
    case BadgeSize.LARGE:
      return '18px';
    default:
      return '1rem';
  }
};

const TextBadge: React.FC<TextBadgeProps> = ({ size, text }) => {
  const classes = useStyles({ size, text });

  return (
    <Box className={classes.root}>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default TextBadge;
