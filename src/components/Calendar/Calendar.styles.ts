import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",

    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        padding: "20px",
    },
    column: {
        flexDirection: "column",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    offset: {
        marginLeft: "20px"
    },
    gRoot: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(6, 50px)",
        padding:"20px",

    }
}))