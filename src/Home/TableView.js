import React, {useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    paddingTop: '5px',
  },
  table: {
    minWidth: 650,
  },
  textWhite: {
      color: 'white',
  },
  tableHead: {
    backgroundColor: '#3f51b5',
    fontWeight: 'bold'
  },
});


const rows = [];

export default function TableView(props) {

  const[search,Setsearch]=useState("") 
  const classes = useStyles(); 
  const { searchResult} = props;

 const data=searchResult.filter(x=>{
   return x.name.toLowerCase().startsWith(search.toLowerCase())
 });

 
  return (
    <Paper className={classes.root}>
       <TextField
            variant="outlined"
            margin="normal" 
            Width="250px"
           placeholder="Search" 
            onChange={e=>Setsearch(e.target.value)}
          />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHead}>
            <TableCell className={classes.textWhite}>Name</TableCell>       
            <TableCell className={classes.textWhite}>Diameter</TableCell>
            <TableCell className={classes.textWhite}>Gravity</TableCell>
            <TableCell className={classes.textWhite}>Terrain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>             
              <TableCell >{row.diameter}</TableCell>
              <TableCell >{row.gravity}</TableCell>
              <TableCell >{row.terrain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}