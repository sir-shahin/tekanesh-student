import React from "react";
import { Box, Button,Paper, Tab, Tabs } from "@mui/material";

import TicketTable, { TicketRow } from "./TicketTable";

type Props = {
  rows: TicketRow[];
  onNew: () => void;
};

export const TicketTabs: React.FC<Props> = ({ rows, onNew }) => {
  const [tab, setTab] = React.useState(0);

  const all = rows;
  const inProgress = rows.filter((r) => r.status === "in-progress");
  const done = rows.filter((r) => r.status === "done");

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Box
        width={"100%"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            aria-label="ticket tabs"
          >
            <Tab label={`همه تیکت ها (${all.length})`} />
            <Tab label={`تیکت درحال انجام (${inProgress.length})`} />
            <Tab label={`تیکت های انجام شده (${done.length})`} />
          </Tabs>

          <Button
            onClick={onNew}
            variant="contained"
            color="primary"
            sx={{ px: 5 }}
          >
            ثبت تیکت جدیــــد
          </Button>
        </Box>
      </Box>

      <Box pt={2} borderTop={1} borderColor={"#eee"}>
        {tab === 0 && <TicketTable rows={all} />}
        {tab === 1 && <TicketTable rows={inProgress} />}
        {tab === 2 && <TicketTable rows={done} />}
      </Box>
    </Paper>
  );
};

export default TicketTabs;
