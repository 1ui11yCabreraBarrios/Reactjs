import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

import MyModal from "../../components/MyModal";
import AlertDialog from "../../components/Dialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListCine = () => {
  const classes = useStyles();

  const movie = useSelector((store) => store.cine.data);
  const rows = movie.map((values, index) => ({
    id: index,
    nombre: values.nombre,
    apellido: values.apellido,
    cui: values.cui,
    movie: values.movie,
    fecha: values.fecha,
    horaInicio: values.horaInicio,
    horaFinal: values.horaFinal,
    sala: values.sala,
    asiento: values.asiento,
    precio: values.precio,
  }));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombres</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Cui</TableCell>
            <TableCell>Pelicula</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Inicia</TableCell>
            <TableCell>Termina</TableCell>
            <TableCell>Sala</TableCell>
            <TableCell>Asiento</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index} >
              <TableCell >{row.nombre}</TableCell>
              <TableCell >{row.apellido}</TableCell>
              <TableCell>{row.cui}</TableCell>
              <TableCell>{row.movie}</TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.horaInicio}</TableCell>
              <TableCell>{row.horaFinal}</TableCell>
              <TableCell>{row.sala}</TableCell>
              <TableCell>{row.asiento}</TableCell>
              <TableCell>{row.precio}</TableCell>
              <TableCell>
            
                <AlertDialog index={index}/>
                <MyModal index={index} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListCine;
