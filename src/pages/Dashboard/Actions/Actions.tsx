/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useEffect, useState } from "react";
import { IconButton, Menu, MenuItem, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { StyledTableCell, StyledTableRow } from "../../../styled-components/styledTable";
import { Delete, Info, MoreHorizRounded } from "@mui/icons-material";
import ActionModal from "./ActionModal";
import { deleteAction, getActions } from "../../../slices/ActionsSlice";
import { AppDispatch } from "../../../store";
import { StyledButton } from "../../../styled-components/styledButton";
import MoreInfoModal from "./MoreInfoModal";

export interface ValuesProps {
  name: string;
  description: string;
  example_response: string;
  example_request: string;
}

function Actions() {
  const dispatch = useDispatch<AppDispatch>();
  const [openActionModal, setOpenActionModal] = useState(false);
  const handleOpenActionModal = () => setOpenActionModal(true);
  const handleCloseActionModal = () => setOpenActionModal(false);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openBasicModal = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getActions());
  }, []);
  const actions = useSelector((state: any) => state.Actions.actions);

  return (
    <Layout>
      <StyledButton variant="contained" sx={{ margin: "0rem 0rem 2rem 0rem" }} onClick={handleOpenActionModal}>
        Add Action
      </StyledButton>
      <ActionModal
        open={openActionModal}
        handleClose={() => {
          handleCloseActionModal();
        }}
      />

      <>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>API Url</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Request Sample</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actions?.map((action: any, i: number) => {
                return (
                  <StyledTableRow key={action.id}>
                    <StyledTableCell>{i + 1}</StyledTableCell>
                    <StyledTableCell>{action?.name}</StyledTableCell>
                    <StyledTableCell>{action?.description}</StyledTableCell>
                    <StyledTableCell>{action?.example_request}</StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <IconButton id="basic-button" aria-haspopup="true" onClick={handleClick}>
                          <MoreHorizRounded />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openBasicModal}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem>
                            {" "}
                            <Info sx={{ marginRight: ".5rem" }} />
                            <MoreInfoModal api={action.api} description={action?.description} sample_request={action?.example_request} sample_response={action?.example_response} />
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "red" }}
                            onClick={() => {
                              handleClose();
                              dispatch(deleteAction(action?.id)).then(() => {
                                dispatch(getActions()).then(() => {
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
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={agents?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </>
    </Layout>
  );
}

export default Actions;
