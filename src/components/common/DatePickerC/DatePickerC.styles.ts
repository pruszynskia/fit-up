import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",

        "& > nav": {
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            color: "#fff",
            fontWeight: "bold",
            maxWidth: "100%",
            backgroundColor: theme.palette.primary.main,
            // margin: "0 10px"

            "& > div": {
                display: "flex",
                
                alignItems: "center",
                fontWeight: "bold",

                "&:hover": {
                    cursor: "pointer"
                }
            }
        }
    },

    cRoot: {
        display: "grid",
        height: "auto",

        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "0.5fr repeat(6, 2.5em)",
        gap: "5px",
        // margin: "0 10px 10px 10px"
        marginBottom: "5px",
        
        "& > nav": {
            display: "flex",
            color: "#424242",
            gridArea: "1 / 1 / 2 / 8",

            "& > div": {
                display: "flex",
                justifyContent: "center",

                padding: "10px 0",
                width: "100%",

                "&>span": {
                    display: "flex",
                    justifyContent: "center",
                }
            }
        },

        "& > div": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            // height: "2em",
            // width: "2em",
        }
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
    
    expand__months: {
        position: "relative",
        // marginTop: "5em",
    
        "& > div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        background: "#fff",
        top: "0",
        left: "0",
        height: "calc(100vh - 5em - 45px)",
        width: "100%",
        transformOrigin: "0 0",
        overflow: "auto",
    
        // @include boxShadow(3),
    
        "& > span": {
            display: "flex",
            justifyContent: "center",
            padding: "5px 0",
            marginTop: "2px",
            width: "100%",
    
            "&:hover": {
                background: theme.palette.primary.main,
                color: "#fff",
                cursor: "pointer",
            }
            }
        }
    },
    
    expanded__months: {
        transform: "scaleY(1)",
    
        transition: "transform 0.2s ease-in-out, color 0.3s ease-in 0.3s",
    },
    
    collapsed__months: {
        transform: "scaleY(0)",
        color: "transparent",
        transition: "transform 0.2s ease-in-out 0.3s, color 0.3s ease-out",
    },
    
    expand__years: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
        position: "absolute",
        top: "2.6em",
        left: "0",
        height: "calc(100vh - 5em - 45px)",
        width: "100%",
        transformOrigin: "0 0",
        overflow: "auto",
    
        // @include boxShadow(3),
        "& > span": {
        display: "flex",
        justifyContent: "center",
        padding: "5px 0",
        marginTop: "2px",
        width: "100%",
    
        "&:hover": {
            background: theme.palette.primary.main,
            cursor: "pointer",
            color: "#fff",
        }
        }
    },
    
    expanded__years: {
        transform: "scaleY(1)",
    
        transition: "transform 0.2s ease-in-out, color 0.3s ease-in 0.3s",
    },
    
    collapsed__years: {
        transform: "scaleY(0)",
        color: "transparent",
        transition: "transform 0.2s ease-in-out 0.3s, color 0.3s ease-out",
    },
    
    rotate180cw: {
        transform: "rotate(-180deg)",
        transition: "transform 0.4s ease-in-out",
    },
    
    rotate0ccw: {
        transform: "rotate(0deg)",
        transition: "transform 0.4s ease-in-out",
    },
    
    rotate180ccw: {
        transform: "rotate(180deg)",
        transition: "transform 0.4s ease-in-out",
    },
    
    rotate0cw: {
        transform: "rotate(-0deg)",
        transition: "transform 0.4s ease-in-out",
    },
    
    selected__date: {
        fontWeight: "bold",
        fontSize: "1.4em",
        background: theme.palette.primary.main,
        color: "#fff"
    }
}))