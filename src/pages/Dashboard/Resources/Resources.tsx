import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { Container, IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { deleteManual, getManuals, trainManual } from "../../../slices/PostManualSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { StyledTableCell, StyledTableRow } from "../../../styled-components/styledTable";
import { Delete, Info, More, MoreHorizRounded, PlayLesson } from "@mui/icons-material";
import MoreInforMenu from "./MoreInfoMenu";
import BasicModal from "../../../components/Modal";

function Resources() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getManuals());
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const resources = useSelector((state) => state.Manuals.resources);

  // const resources = JSON.parse(sessionStorage.getItem("resources"));
  return (
    <Layout>
      <Container>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>

                {/* <StyledTableCell>Date Added</StyledTableCell>
                <StyledTableCell>Date Modified</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {resources?.map((resource) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{resource.title}</StyledTableCell>
                    <StyledTableCell>{resource.description}</StyledTableCell>
                    <StyledTableCell>{resource.training_status}</StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <IconButton id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                          <MoreHorizRounded />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem
                            // onClick={handleClose}
                            onClick={() => {
                              dispatch(trainManual(resource.id));
                            }}
                          >
                            <PlayLesson sx={{ marginRight: ".5rem" }} />
                            Train
                          </MenuItem>
                          <MenuItem>
                            {" "}
                            <Info sx={{ marginRight: ".5rem" }} />
                            <BasicModal
                              title={resource.title}
                              description={resource.description}
                              createdAt={new Date(resource.created_at).toLocaleString()}
                              modifiedAt={new Date(resource.updated_at).toLocaleString()}
                            />
                          </MenuItem>
                          <MenuItem
                            // onClick={handleClose}
                            sx={{ color: "red" }}
                            onClick={() => {
                              dispatch(deleteManual(resource.id));
                            }}
                          >
                            <Delete sx={{ marginRight: ".5rem" }} /> Delete
                          </MenuItem>
                        </Menu>
                      </div>
                      {/* <MoreInforMenu /> */}
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
          count={resources?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </Layout>
  );
}

export default Resources;
