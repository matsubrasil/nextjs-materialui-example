import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(0.5)
    },
    label: {
      textTransform: 'none'
    }
  })
)

interface IButtonProps {
  text: string
  size?: number
  color?: string
  variant?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  //onClick: React.ClickEventHandler<HTMLButtonElement>
}

const ButtonControl = ({ text, size, color, variant, onClick, ...other }) => {
  const classes = useStyles()

  return (
    <Button
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </Button>
  )
}

export default ButtonControl
