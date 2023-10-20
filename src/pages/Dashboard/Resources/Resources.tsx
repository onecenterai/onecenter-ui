import { MouseEvent, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Container, IconButton, Menu, MenuItem, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { deleteManual, getManuals, trainManual } from "../../../slices/PostManualSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { StyledTableCell, StyledTableRow } from "../../../styled-components/styledTable";
import { Delete, Info, MoreHorizRounded, PlayLesson } from "@mui/icons-material";
import BasicModal from "../../../components/Modal";

function Resources() {
  const dispatch: any = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getManuals());
  }, []);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown | null, newPage: number) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const resources = useSelector((state: any) => state.Manuals.resources);

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
              </TableRow>
            </TableHead>
            <TableBody>
              {resources?.map((resource: any) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{resource.title}</StyledTableCell>
                    <StyledTableCell>{resource.description}</StyledTableCell>
                    <StyledTableCell>{resource.training_status == null ? "Not Trained" : resource.training_status}</StyledTableCell>
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
                              dispatch(trainManual(resource.id)).then(() => {
                                dispatch(getManuals()).then(() => {
                                  handleClose();
                                });
                              });
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
                              dispatch(deleteManual(resource.id)).then(() => {
                                dispatch(getManuals()).then(() => {
                                  handleClose();
                                });
                              });
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
