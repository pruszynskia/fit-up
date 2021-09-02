import React from 'react'

import useStyles from '../src/styles/common';
import Footer from '../src/components/common/Footer';
import Navbar from '../src/components/common/Navbar/Navbar';

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Footer />
    </div>
  )
}
