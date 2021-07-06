import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "10px"
        // flexDirection: "column",
        // height: "100vh"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px"
    },
    column: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    offset: {
        marginLeft: "20px"
    },
    title: {
        textTransform: "uppercase"
    }, 
    bold: {
        fontWeight: "bold"
    }
}))