import { FitUpStyles } from '../styles/Common.module';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import FitUp from './src/components/FitUp';

export default function Home() {
  return (
    <div>
      <Navbar />
      <FitUp />
      <Footer />
    </div>
  )
}
