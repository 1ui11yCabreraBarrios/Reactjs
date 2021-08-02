import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";

const columns = [
  {
    field: "nombre",
    headerName: "Nombres",
    width: 140,
  },
  {
    field: "apellido",
    headerName: "Apellidos",
    width: 140,
  },
  {
    field: "cui",
    headerName: "Cui",
    width: 140,
  },
  {
    field: "movie",
    headerName: "Pelicula",
    width: 140,
  },
  {
    field: "fecha",
    headerName: "Fecha",
    width: 140,
  },
  {
    field: "horaInicio",
    headerName: "Inicia",

    width: 140,
  },
  {
    field: "horaFinal",
    headerName: "Termina",
    width: 140,
  },
  {
    field: "sala",
    headerName: "Sala",
    width: 140,
  },
  {
    field: "asiento",
    headerName: "Asiento",
    width: 140,
  },

  { field: "precio", headerName: "Precio", width: 140 },
];


function CineList() {
  
  const movie = useSelector((store) => store.cine.data);
  const rows = movie.map((values) => ({
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
    <div style={{ height: 400, width: "100%" }}>
     
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default CineList;
