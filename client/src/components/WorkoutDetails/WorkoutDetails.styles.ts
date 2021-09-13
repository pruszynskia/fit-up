import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px"
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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