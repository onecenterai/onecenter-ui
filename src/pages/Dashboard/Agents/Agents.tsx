import { MouseEvent, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Container, IconButton, Menu, MenuItem, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { StyledTableCell, StyledTableRow } from "../../../styled-components/styledTable";
import { Delete, Info, MoreHorizRounded } from "@mui/icons-material";
import BasicModal from "../../../components/Modal";
import { deleteAgent, getAgents } from "../../../slices/AgentsSlice";
import { StyledButton } from "../../../styled-components/styledButton";
import AddAgentModal from "./AddAgentModal";

function Agents() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAgents());
  }, []);

  const [openAgentModal, setOpenAgentModal] = useState(false);
  const handleNewAgentModalOpen = () => setOpenAgentModal(true);
  const handleNewAgentModalClose = () => setOpenAgentModal(false);
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
  const agents = useSelector((state: any) => state.Agents.agents);
  console.log(agents);

  return (
    <Layout>
      <Container>
        <StyledButton variant="contained" sx={{ margin: "0rem 0rem 2rem 0rem" }} onClick={handleNewAgentModalOpen}>
          Create New Agent
        </StyledButton>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Phone No.</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>

                {/* <StyledTableCell>Date Added</StyledTableCell>
                <StyledTableCell>Date Modified</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {agents?.map((agent: any) => {
                return (
                  <StyledTableRow key={agent.id}>
                    <StyledTableCell>{agent?.id}</StyledTableCell>
                    <StyledTableCell>{agent?.name}</StyledTableCell>
                    <StyledTableCell>{agent?.phone}</StyledTableCell>
                    <StyledTableCell>{agent?.email}</StyledTableCell>
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
                          {/* <MenuItem
                            // onClick={handleClose}
                            onClick={() => {
                              dispatch(trainManual(agent?.id)).then(() => {
                                dispatch(getManuals()).then(() => {
                                  handleClose();
                                });
                              });
                            }}
                          >
                            <PlayLesson sx={{ marginRight: ".5rem" }} />
                            Train
                          </MenuItem> */}
                          <MenuItem>
                            {" "}
                            <Info sx={{ marginRight: ".5rem" }} />
                            <BasicModal
                              title={agent?.name}
                              description={agent?.email}
                              createdAt={new Date(agent?.created_at).toLocaleString()}
                              modifiedAt={new Date(agent?.updated_at).toLocaleString()}
                            />
                          </MenuItem>
                          <MenuItem
                            // onClick={handleClose}
                            sx={{ color: "red" }}
                            onClick={() => {
                              dispatch(deleteAgent(agent?.id)).then(() => {
                                dispatch(getAgents()).then(() => {
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
          count={agents?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <AddAgentModal handleNewAgentModalClose={handleNewAgentModalClose} openAgentModal={openAgentModal} />
      </Container>
    </Layout>
  );
}

export default Agents;
