import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 200
    },

    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    },

    gridButtons: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cardMedia: {
        paddingBottom: '40px'
    },

    typographyTitle: {
        color: "rgb(102, 0, 102)"
    }
});

export default useStyles;