import { fitUpStyles } from '../src/styles/common';
import Footer from '../src/components/common/Footer';
import Navbar from '../src/components/common/Navbar/Navbar';

export default function Home() {
  const styles = fitUpStyles();

  return (
    <div className={styles.root}>
      <Navbar />
      <Footer />
    </div>
  )
}
