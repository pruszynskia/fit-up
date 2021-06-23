import { makeStyles } from '@material-ui/core';

export const fitUpStyles = makeStyles(() => ({
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
    },
    glassMorphism: {
        background: "rgba( 255, 255, 255, 0.4 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        webkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
    }
}));

