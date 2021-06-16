import Head from 'next/head'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import React from 'react'
import PageHeader from '../components/PageHeader'
import { PeopleOutlineTwoTone } from '@material-ui/icons'

const useStyles = makeStyles(theme =>
  createStyles({
    appMain: {
      paddingLeft: '320px',
      width: '100%'
    }
  })
)

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>Next - Material UI Setup</title>
      </Head>

      <main>
        <SideMenu />
        <section className={classes.appMain}>
          <Header />
          <PageHeader
            title="Page Header"
            subTitle="Page description"
            icon={<PeopleOutlineTwoTone fontSize="large" />}
          />
        </section>
      </main>
    </div>
  )
}

export default Home
