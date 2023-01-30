import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MovieIcon from '@material-ui/icons/Movie';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useNavigate } from 'react-router-dom';
const useStyles=makeStyles({
root:{
    width:"100%",
    position:'fixed',
    bottom:0,
    backgroundColor:"white",
    zIndex:100,
},

}
);

export default function SimpleBottomNavigation() {
    const classes=useStyles();
  const [value, setValue] = React.useState(0);
  const history=useNavigate();
  useEffect(() => {
   
    if(value === 0) history("/");
    else if (value === 1) history("/movies");
    else if (value === 2) history("/series");
    else if (value === 3) history("/search");
  },[value,history]);
  return (
    
      <BottomNavigation
       
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
        style={{color:"black"}}
        label="Trending" icon={<TrendingUpOutlinedIcon />} />

        <BottomNavigationAction 
        style={{color:"black"}}
        label="Movies" icon={<LiveTvIcon />} />

        <BottomNavigationAction  style={{color:"black"}} label="Series" icon={<MovieIcon />} />
        <BottomNavigationAction 
        style={{color:"black"}}
        label="Search" icon={<SearchOutlinedIcon />} />
      </BottomNavigation>
    
  );
}
