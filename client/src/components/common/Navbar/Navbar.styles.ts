import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center"
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
    }
}))