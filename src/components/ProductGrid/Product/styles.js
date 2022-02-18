import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    cardRootSameHeight: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    CardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardMedia: {
        paddingBottom: '40px'
    },

    linkOn: {
        textDecoration: 'none',
        pointerEvents: 'auto'
    },
    linkOff: {
        textDecoration: 'none',
        pointerEvents: 'none'
    }
}));