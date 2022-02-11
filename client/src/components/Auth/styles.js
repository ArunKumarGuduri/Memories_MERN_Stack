import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    paper: {
        marginTop: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    root: {
        '& .MuiTextField-root': {
            margin: '0.5rem',
        },
    },
    avatar: {
        margin: '0.5rem',
        backgroundColor: '#ce93d8',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '1.5rem',
    },
    submit: {
        margin: '1.5rem 0 1rem',
    },
    googleButton: {
        marginBottom: '1rem',
    },
}));