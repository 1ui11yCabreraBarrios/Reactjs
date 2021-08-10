import React from "react";
import { Provider } from "react-redux";
import Cine from "./Modulos/movies/Cine";
import { makeStyles } from "@material-ui/core/styles";
import generateStore from "./Services/store";

import Container from '@material-ui/core/Container';
import ListCine from "./Modulos/movies/ListCine";


const useStyles = makeStyles((theme) => ({
  margin: {
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "50px",
  },
  content: {
    backgroundColor: "#0a2e55",
    opacity: ".9",
    padding: " 0 18px",
    borderRadius: "10px",
  },
}));

function App() {
  const classes = useStyles();
  const store = generateStore();

  return (
    <Provider store={store}>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container >
        
          <Cine />
        
      </Container>

     {/*  <div className={classes.margin}>
        <CineList />
      </div> */}
      
      <div className={classes.margin}>
        <ListCine/>
      </div>
    </Provider>
  );
}

export default App;
