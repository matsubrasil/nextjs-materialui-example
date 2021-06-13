import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '0px',
      width: '320px',
      height: '100%',
      backgroundColor: '#253953'
    }
  })
)

const SideMenu: React.FC = () => {
  const classes = useStyles()
  return <div className={classes.root}>Side Menu</div>
}

export default SideMenu
