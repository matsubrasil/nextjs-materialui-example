import React from 'react'
import { Card, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface IPageHeaderProps {
  title: string
  subTitle: string
  icon: any
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: '#fdfdff'
    },
    pageHeader: {
      padding: theme.spacing(4),
      display: 'flex',
      marginBottom: theme.spacing(3)
      // gap: theme.spacing(4)
    },
    pageIcon: {
      display: 'inline-block',
      padding: theme.spacing(2),
      color: '#3c44b1',
      borderRadius: 12
    },
    pageTitle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: theme.spacing(4),
      '& .MuiTypography-subtitle2': {
        opacity: '0.6'
      }
    }
  })
)

const PageHeader: React.FC<IPageHeaderProps> = ({ title, subTitle, icon }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader
