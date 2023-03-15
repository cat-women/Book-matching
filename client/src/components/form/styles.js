import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    boarder:'2px solid black',

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0'
  },
  buttonSubmit: {
    marginBottom: 10
  },
  addIcon: {
    height: '60px',
    width: '10px'
  },
  keywords: {
    margin: '4px',
    wordWrap: 'normal',
    display: 'inline'
  }
}))
