import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex"
    },
    container: {
        flexWrap: "wrap",
        marginTop: "30px"
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
    title: {
        textTransform: "uppercase"
    }, 
    bold: {
        fontWeight: "bold"
    }
}))