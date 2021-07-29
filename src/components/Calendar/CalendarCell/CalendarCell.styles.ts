import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    container: {
        display: "flex",
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
    hasData: {
        display: "100%",
        width: "100%",
        height: "auto",
        backgroundColor: "#424242 !important",
        color: "#fff",

    },

    selected: {
        borderRadius: "50%",
        background: theme.palette.secondary.main,
        color: "#fff"
    },
    today: {
        borderRadius: "50%",
        background: theme.palette.primary.main,
        color: "#fff",
        fontWeight: "bold",
    },
    day: {
        // height: "100%",
        width: "2.5em",
        height: "2.5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
    
        transition: "background-color 0.3s ease-in-out",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            cursor: "pointer",
            color: "#fff"
        }
    },
}))