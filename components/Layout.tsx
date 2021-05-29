import React, { ReactNode } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavigationBar from './NavigationBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = `Yuta Ueno's Page` }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/images/30320735.png" />
    </Head>
    <NavigationBar />
    {children}
  </div>
)

export default Layout
