import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  grid: {
    display: 'flex'
  },
  title: {
    padding: '0 16px'
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
  addIcon: {
    height: '60px',
    width: '10px'
  },
  keywords: {
    margin: '4px',
    marginBottom: '10px',
    wordWrap: 'normal',
    display: 'inline',
    padding: '5px'
  },
  buttonSubmit: {
    marginBottom: 10,
    width: 'fit-content',
    backgroundColor: 'green',
    borderRadius: '15px',
    mariginTop: '10px',
    padding: '5px'
  },
  buttonEdit: {
    marginBottom: 10,
    width: 'fit-content',
    backgroundColor: 'green',
    borderRadius: '15px',
    mariginTop: '10px',
    padding: '5px',
    display: 'block',
    margin: '40px'
  },
  keywordDiv: {
    border: 'solid 1px',
    margin: '5px',
    padding: '9px'
  }
})
