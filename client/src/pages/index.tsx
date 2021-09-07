import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from '../styles/common';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar/Navbar';
import { testActionGetData } from '../redux/actions';
import Main from '../components/Main';

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    testActionGetData(dispatch)
}, [])

  return (
    <div className={classes.root}>
      <Main />
    </div>
  )
}
