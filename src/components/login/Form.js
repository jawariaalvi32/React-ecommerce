import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Login } from '../../store/action';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(9, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
  
function Form(props) {
  const [Data, setData] = useState([])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    //   setData(values)
      props.Login(values)
    },
  });
  console.log(Data)

    return (
      <div className="formic" >
        <Grid container spacing={0}>
          <Grid item md={4} sm={0}/>
        <Grid item md={4} xs={12} >
            <h2 className="p1"style={{textAlign:"center"}}>LOGIN</h2><br/>
            <form  className="form" onSubmit={formik.handleSubmit}> 
              <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
              />
              <br/> 
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.password)}
                helperText={formik.touched.email && formik.errors.passwprd}
              />
              <br/>
              <Button className= "btn" color="primary" variant="contained" fullWidth type="submit">
                Login
              </Button>
            </form>
          </Grid>
          <Grid item md={4} sm={0}/>
        </Grid>
      </div>
   )
 }

 const mapDispatchToProps = (dispatch) => ({
  Login: (Data) => dispatch(Login(Data))
})


export default connect(null, mapDispatchToProps)(Form);