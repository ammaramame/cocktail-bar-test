import { Box, Chip, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface OverviewListItemProps {
  label: string;
  value?: string | string[];
}

const OverviewListItem: FunctionComponent<OverviewListItemProps> = (props) => {
  const { label, value } = props;
  return (
    <Box display="flex" gap={2} justifyContent="space-between" alignItems="center">
      <>
        <Box>
          <Typography color="GrayText">{label} :</Typography>
        </Box>
        <Box>
          {typeof value === "string" && <Typography fontWeight={600}>{value}</Typography>}
          {typeof value === "object" && (
            <Stack direction="row" spacing={1}>
              {value?.map((item) => (
                <Chip label={item} key={item} color="error" />
              ))}
            </Stack>
          )}
        </Box>
      </>
    </Box>
  );
};

export default OverviewListItem;
