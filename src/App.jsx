import React from "react";
import { Provider } from "react-redux";
import Cine from "./components/movies/Cine";
import { makeStyles } from "@material-ui/core/styles";
import generateStore from "./Services/store";
import CineList from "./components/movies/CineList";
import Container from '@material-ui/core/Container';


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

      <div className={classes.margin}>
        <CineList />
      </div>
    </Provider>
  );
}

export default App;
