import { FitUpStyles } from '../styles/common';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import FitUp from './src/components/FitUp';

export default function Home() {
  const styles = FitUpStyles();

  return (
    <div className={styles.root}>
      <Navbar />
      <Footer />
    </div>
  )
}
