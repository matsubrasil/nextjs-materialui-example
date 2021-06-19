import React from 'react'
import Head from 'next/head'

import Employees from '../screen/Employees'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next - Material UI Setup</title>
      </Head>
      <main>
        <Employees />
      </main>
    </div>
  )
}

export default Home
