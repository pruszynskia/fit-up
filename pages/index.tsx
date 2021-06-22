import { fitUpStyles } from '../src/styles/common';
import Footer from '../src/components/common/Footer';
import Navbar from '../src/components/common/Navbar';
import FitUp from '../src/components/CurrentWorkout';

export default function Home() {
  const styles = fitUpStyles();

  return (
    <div className={styles.root}>
      <Navbar />
      <Footer />
    </div>
  )
}
