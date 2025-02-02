"use client"
import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchPosts } from "@/state/data/dataSlice";

export default function App(){
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
 

   if(loading){
    return(
      <div>
        Loading...
      </div>
    )
   }
    

   return (
    <TableContainer component={Paper}>
      <Table      sx={{width: { xs: "100%", md: "50%" },margin: "auto",mt: 3,boxShadow: 3,}}
       aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">userId</TableCell>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
           
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  
}


