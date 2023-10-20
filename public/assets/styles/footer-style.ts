import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

export const NoPaddingListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: 0,
    alignItems:'baseline'
  }));
  
  export const ContainerStyle = {
    backgroundColor: '#106897',
    color: '#fff',
    paddingBlock: '2rem'
  };
  
  export const GridItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };
  
  export const BoxTextStyle = {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 400,
    margin: 0,
  };
  
  export const SocialIconsStyle = {
    display: 'flex',
    gap: '1rem',
  };
  
  export const LinkListStyle = {
    textTransform: 'uppercase',
    fontSize: '10px',
    letterSpacing: '0.5px',
    fontWeight: '600',
  };
  
  export const ListItemStyle = {
    paddingLeft: 0,
    alignItems: 'baseline',
    textDecoration: 'none',
    color: 'white',
  };
    
  export const ListItemIcons = {
    paddingRight:'0.625rem',
    minWidth:'auto'
  };
