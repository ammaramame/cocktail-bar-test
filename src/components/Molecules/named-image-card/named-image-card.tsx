import { Box, BoxProps, Chip, Paper, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import LinesEllipsis from "react-lines-ellipsis";

interface NamedImageCardProps {
  url?: string;
  caption?: string;
  tags?: string[];
  details?: string;
  containerProps?: BoxProps;
}

const NamedImageCard: FunctionComponent<NamedImageCardProps> = (props) => {
  const { url, caption, details, tags, containerProps } = props;
  return (
    <Box component={Paper} p={2} {...containerProps}>
      {url && (
        <Box className={"zoom"} component={Paper} overflow={"hidden"}>
          <img src={url} alt="cocktail" width={"100%"} style={{ maxHeight: 300, objectFit: "cover" }} />
        </Box>
      )}
      <Box mt={1}>
        <Typography variant="h6" fontWeight={800}>
          {caption}
        </Typography>
      </Box>

      <Box mt={1} component={Typography} color="GrayText">
        <LinesEllipsis text={details} maxLine="3" ellipsis="..." trimRight basedOn="words" />
      </Box>

      <Box mt={2}>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {tags?.map((item) => (
            <Chip label={item} color="primary" variant="filled" key={item} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default NamedImageCard;
