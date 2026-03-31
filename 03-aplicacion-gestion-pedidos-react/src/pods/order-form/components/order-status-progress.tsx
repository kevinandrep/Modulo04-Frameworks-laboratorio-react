import { CircularProgress, Box, Typography } from "@mui/material";

export const OrderStatusProgress = ({ value }: { value: number }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={150} />

      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>Estado</Typography>
        <Typography
          fontSize={25}
          variant="caption"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};
