import { Backdrop, CircularProgress } from "@mui/material";
import { COLOR } from "../../utils/ColorConstant";

interface OverlayLoaderPrpos {
  show: boolean;
}

const OverlayLoader = (props: OverlayLoaderPrpos) => {
  const { show } = props;
  return (
    <Backdrop
      sx={{ color: COLOR.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default OverlayLoader;
