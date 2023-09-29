import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import * as React from "react";
import SiderBar from "../src/Component/siderBar/sider";
import ChatContent from "./Component/contentChat/ChatContent";
import ListChat from "./Component/listChat/listChat";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={0.4}>
          <Item
            style={{
              height: "100vh",
            }}>
            <SiderBar />
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item
            style={{
              height: "100vh",
            }}>
            <ListChat />
          </Item>
        </Grid>
        <Grid xs={8.6}>
          <Item
            style={{
              height: "100vh",
            }}>
            <ChatContent />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
