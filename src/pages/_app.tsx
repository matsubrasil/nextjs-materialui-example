import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    appMain: {
      paddingLeft: '320px',
      width: '100%'
    }
  })
)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const classes = useStyles()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Next - Material UI - Setup</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <section className={classes.appMain}>
          <Header />
          <Component {...pageProps} />
        </section>

        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default MyApp
