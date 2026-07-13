import React from "react";
import { CheckCircleOutline, ErrorOutlineOutlined } from "@mui/icons-material";
import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "theme";
import { EyeIcon } from "uiKit";
import { Link } from "react-router-dom";

export type TicketRow = {
  id: string;
  title: string;
  date: string;
  time: string;
  status: "done" | "in-progress" | "new";
};

type Props = {
  rows: TicketRow[];
};

export const TicketTable: React.FC<Props> = ({ rows }) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ mt: 1 }}>
      <Table>
        <TableBody>
          {rows.map((r) => (
            <TableRow
              key={r.id}
              hover
              sx={{
                "& .MuiTableCell-root": {
                  borderBottom: "none",
                },
              }}
            >
              <TableCell align="right">
                <Typography fontSize={12} color="text.secondary">
                  شناسه تیکت: {r.id}
                </Typography>
                <Typography fontWeight={600}>{r.title}</Typography>
              </TableCell>
              <TableCell align="right">{r.date}</TableCell>
              <TableCell align="left">
                <Chip
                  label={"انجام شده"}
                  variant="outlined"
                  icon={
                    true ? (
                      <CheckCircleOutline
                        color="primary"
                        sx={{ left: -8, position: "relative" }}
                      />
                    ) : (
                      <ErrorOutlineOutlined color="warning" />
                    )
                  }
                  sx={{
                    fontWeight: "700",
                    color: true
                      ? theme.palette.primary[600]
                      : theme.palette.warning[600],
                    bgcolor: true
                      ? theme.palette.primary[50]
                      : theme.palette.warning[600],
                    borderColor: true
                      ? theme.palette.primary[200]
                      : theme.palette.warning[500],
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <Link to={`/student/supports/10`}>
                  <Button
                    sx={{
                      border: 1,
                      borderColor: "#ccc",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      minWidth: "unset",
                      borderRadius: 2,
                      px: 0,
                    }}
                  >
                    <EyeIcon width={22} height={22} />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketTable;
