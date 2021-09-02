import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    column: {
        flexDirection: "column",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    footer: {
        display: "flex",
        position: "fixed",
        left: "0",
        bottom:"0",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        width: "100%",
        justifyContent: "start",
    },
    offset: {
        marginLeft: "20px"
    }
}))