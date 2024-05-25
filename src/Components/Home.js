import * as React from "react";
import Paper from "@mui/material/Paper";
import Modalform from "./Modalform";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Typography } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976D2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [editId, setEditId] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("key"));
    setData(userData);
  }, []);
  console.log("editId ", editId);
  const deleteRow = (index) => {
    //console.log("the value of", index);
    data.splice(index, 1);
    localStorage.setItem("key", JSON.stringify([...data]));
  };
  const editBtn = (id) => {
    console.log("index-->", id);
    setEditId(id);
    setModalOpen(true);
    setTitle({title:title})
  };
  
  return (
    <div>
      {modalOpen && <Modalform onClose={setModalOpen} id={editId} />}
      {!modalOpen && (
        <Box sx={{ m: 9 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Details List</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Add Details
            </Button>
          </Box>
      
          <Paper sx={{ width: "100%", overflow: "hidden", pt: 3 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Start Time</StyledTableCell>
                    <StyledTableCell>End Time</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.length > 0 &&
                    data
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item, index) => {
                        return (
                          <StyledTableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            <StyledTableCell>
                              {item.title}
                              {index}
                            </StyledTableCell>
                            <StyledTableCell>
                              {item.description}
                            </StyledTableCell>
                            <StyledTableCell>{item.date}</StyledTableCell>
                            <StyledTableCell>
                              {item.starttime}
                              {index}
                            </StyledTableCell>
                            <StyledTableCell>{item.endtime}</StyledTableCell>
                            <StyledTableCell>
                              <Box
                                sx={{ display: "flex", columnGap: "0.5rem" }}
                              >
                                <Button
                                  variant="contained"
                                  onClick={() => editBtn(item.id)}
                                >
                                  Edit
                                </Button>{" "}
                                <Button
                                  onClick={() => deleteRow(index)}
                                  color="error"
                                  variant="outlined"
                                >
                                  Delete
                                </Button>
                              </Box>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      )}
    </div>
  );
}
export default Home;