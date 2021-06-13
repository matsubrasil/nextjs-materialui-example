import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'

interface SimpleProps {
  message: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 700
    },
    button: {
      margin: theme.spacing(1)
    }
  })
)

const SimplePage: React.FC<SimpleProps> = ({ message }) => {
  const classes = useStyles()
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button className={classes.root} variant="contained">
        {message}
      </Button>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      message: 'super'
    }
  }
}

export default SimplePage
