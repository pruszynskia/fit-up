import { FitUpStyles } from '../../../styles/common';

function Footer() {
  const styles = FitUpStyles();
    return (
      <div
        className={`
        ${styles.container}
        ${styles.row}
        ${styles.footer}
        `}
      >
        <div>
          <h2>FitUp</h2>
        </div>
        <div className={styles.offset}>
          <h3>Contact us:</h3>
          <p>(+66) 666 666 666</p>
          <a href="mailto:andrzej.pruszynski90@gmail.com">andrzej.pruszynski90@gmail.com</a>
        </div>
      </div>
    )
  }
  
  export default Footer
