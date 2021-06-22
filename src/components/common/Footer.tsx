import { fitUpStyles } from '../../styles/common';

function Footer() {
  const styles = fitUpStyles();
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
          <div>
            <h3>Contact us:</h3>
            <p>(+66) 666 666 666</p>
            <a href="mailto:andrzej.pruszynski90@gmail.com">andrzej.pruszynski90@gmail.com</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer
