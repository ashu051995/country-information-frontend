import "./App.css";
import { Box } from "@mui/material";
import Routing from "./pages/routes/Routing";
import { COLOR } from "./utils/ColorConstant";

function App() {
  return (
    <Box sx={{ background: COLOR.white, color: COLOR.voilet }}>
      <Routing />
    </Box>
  );
}

export default App;
