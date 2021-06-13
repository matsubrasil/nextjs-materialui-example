import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface SimpleProps {
  message: string
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 700
    }
  })
)

const SimplePage: React.FC<SimpleProps> = ({ message }) => {
  const classes = useStyles()
  return (
    <div>
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
