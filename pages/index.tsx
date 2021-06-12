import { FitUpStyles } from '../styles/common';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import FitUp from '../components/FitUp';

export default function Home() {
  const styles = FitUpStyles();

  return (
    <div className={styles.root}>
      <Navbar />
      <Footer />
    </div>
  )
}
