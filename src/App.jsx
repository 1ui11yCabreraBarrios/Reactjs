import React from "react";
import { Provider } from "react-redux";
import Container from '@material-ui/core/Container';
import Cine from "./components/movies/Cine";
import { makeStyles } from "@material-ui/core/styles";
import generateStore from "./Services/store";
import CineList from "./components/movies/CineList";




const useStyles = makeStyles((theme) => ({
  
  container: {

    backgroundColor: '#cfe8fc',
     height: '80vh',
     borderRadius: '0.5rem',
     marginTop:'50px' 
  },
  margin:{
    paddingLeft: "30px",
    paddingRight:"30px",
    paddingTop:"50px",
  }
  }));

function App() {
  const classes = useStyles();
  const store = generateStore();
 


  return (
    <Provider store ={store}>
<Container maxWidth="sm" className={classes.container}>
<Cine/>
</Container>

<div className={classes.margin}>
<CineList/>
</div>


    </Provider>


   



      
  );
}

export default App;
