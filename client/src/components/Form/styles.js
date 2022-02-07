import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '0.5rem',
        },
        '& .MuiButton-containedSecondary': {
            margin: '0.5rem',
        },
    },
    paper: {
        padding: '0.5rem',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        margin: '0.5rem !important',
    },
}));