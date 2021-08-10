import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { useDispatch} from "react-redux"
import { saveCompra} from "../../Actions/actionsCine";
import { validCine } from "../../helpers/validate";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },

  textField: {
    minWidth: "90%",
  },
  button: {
   textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function Cine() {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues: {
      fecha:  "",
      horaInicio: "",
      horaFinal:"",
      sala:"",
      asiento: "",
      precio: "",
      nombre:  "",
      apellido: "",
      cui: "",
      movie: "",
    },
    enableReinitialize: true,
    validate: validCine,

    onSubmit: (values, { resetForm }) => {
   
    dispatch(saveCompra(values));
      resetForm();
    },
  });

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.container}
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="fecha"
            name="fecha"
            label="Fecha"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fecha}
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!formik.errors.fecha}
            helperText={formik.errors.fecha && formik.errors.fecha}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel id="precio">Precio</InputLabel>
            <Select
              native
              value={formik.values.precio}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="precio"
              name="precio"
              id="precio"
            >
              <option aria-label="None" value="" />
              <option value={25}>Q 25.00 </option>
              <option value={35}>Q 35.00</option>
              <option value={45}>Q 45.00</option>
              <option value={50}>Q 50.00</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="horaInicio"
            name="horaInicio"
            label="Inicio"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.horaInicio}
            error={!!formik.errors.horaInicio}
            helperText={formik.errors.horaInicio && formik.errors.horaInicio}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="horaFinal"
            name="horaFinal"
            label="Final"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.horaFinal}
            className={classes.textField}
            error={!!formik.errors.horaFinal}
            helperText={formik.errors.horaFinal && formik.errors.horaFinal}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel id="sala">Sala</InputLabel>
            <Select
              native
              value={formik.values.sala}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Age"
              name="sala"
              id="sala"
            >
              <option aria-label="None" value="" />
              <option value={1}>Sala 1</option>
              <option value={2}>Sala 2</option>
              <option value={3}>Sala 3</option>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel id="asiento">Asientos</InputLabel>
            <Select
              native
              value={formik.values.asiento}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="asiento"
              name="asiento"
              id="asiento"
            >
              <option aria-label="None" value="" />
              <option value={1}>Asiento 1</option>
              <option value={2}>Asiento 2</option>
              <option value={3}>Asiento 3</option>
              <option value={4}>Asiento 4</option>
              <option value={5}>Asiento 5</option>
              <option value={6}>Asiento 6</option>
              <option value={7}>Asiento 7</option>
              <option value={8}>Asiento 8</option>
              <option value={9}>Asiento 9</option>
              <option value={10}>Asiento 10</option>
              <option value={11}>Asiento 11</option>
              <option value={12}>Asiento 12</option>
              <option value={13}>Asiento 13</option>
              <option value={14}>Asiento 14</option>
              <option value={15}>Asiento 15</option>
              <option value={16}>Asiento 16</option>
              <option value={17}>Asiento 17</option>
              <option value={18}>Asiento 18</option>
              <option value={19}>Asiento 19</option>
              <option value={20}>Asiento 20</option>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="nombre"
            name="nombre"
            label="Nombres"
            type="text"
            variant="outlined"
            className={classes.textField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
            error={!!formik.errors.nombre}
            helperText={formik.errors.nombre && formik.errors.nombre}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="apellido"
            name="apellido"
            label="Apellidos"
            type="text"
            variant="outlined"
            className={classes.textField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apellido}
            error={!!formik.errors.apellido}
            helperText={formik.errors.apellido && formik.errors.apellido}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cui"
            name="cui"
            label="Cui"
            type="numero"
            variant="outlined"
            className={classes.textField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cui}
            error={!!formik.errors.cui}
            helperText={formik.errors.cui && formik.errors.cui}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="movie"
            name="movie"
            label="Nombre de la Pelicula"
            type="text"
            variant="outlined"
            className={classes.textField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.movie}
            error={!!formik.errors.movie}
            helperText={formik.errors.movie && formik.errors.movie}
          />
        </Grid>

      <div>
       <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save
          </Button>
        
     

      </div>

      
      </Grid>
     
    </form>
  );
}

export default Cine;
