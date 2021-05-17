import { Box } from "@theme-ui/components";
function Divider({ sx }) {
  return (
    <Box
      sx={{
        ...sx,
        background: "white",
        opacity: "70%",
        height: "1px",
        width: "100%",
      }}
    />
  );
}

export default Divider;