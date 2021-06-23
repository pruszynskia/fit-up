import useStyles from './Footer.styles'

function Footer() {
  const classes = useStyles()
    return (
      <div
      className={`
      ${classes.container}
        ${classes.row}
        ${classes.footer}
        `}
      >
        <div>
          <h2>FitUp</h2>
        </div>
        <div className={classes.offset}>
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
