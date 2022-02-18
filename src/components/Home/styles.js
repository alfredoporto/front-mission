import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    cSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    cSectionTitle: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: '1rem',

    },

    cSectionServices: {
        listStyleType: 'none',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    cSectionServicesItem: {
        width: '45%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: '#f4f0ec',
        margin: '1rem 1rem 1rem 1rem'
    },

    cSectionServicesItemTitle: {
        marginLeft: '1.5rem'
    }
}));
