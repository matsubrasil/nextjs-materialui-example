import React from 'react'
import {
  AppBar,
  Grid,
  InputBase,
  Toolbar,
  IconButton,
  Badge
} from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: '#fff'
      //transform: 'translateZ(0)'
    },
    searchInput: {
      opacity: '0.6',
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: '0.8rem',
      '&:hover': {
        backgroundColor: '#f2f2f2'
      },
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1)
      }
    }
  })
)

//
const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              startAdornment={<SearchIcon fontSize="small" />}
              className={classes.searchInput}
            />
          </Grid>
          <Grid item sm />
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
