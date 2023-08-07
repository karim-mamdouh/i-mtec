import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { policies } from "./data/policy";
import { policiesStyles } from "./Policy.style";
import { Banner } from "../../components/atoms";

export const Policy = () => {
  const [policy, setPolicy] = useState();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("vision")) {
      setPolicy({ ...policies.vision, subtitle: "Vision" });
    } else if (url.includes("mission")) {
      setPolicy({ ...policies.misson, subtitle: "Mission" });
    } else if (url.includes("quality")) {
      setPolicy({ ...policies.quality, subtitle: "Quality Policy" });
    }
  }, [window.location.href]);

  return (
    <>
      <Banner title={policy?.title} />
      <Stack component="section" sx={policiesStyles.container}>
        <Box component="figure" sx={policiesStyles.figure}>
          <Box
            component="img"
            src={policy?.image}
            sx={policiesStyles.image}
          ></Box>
        </Box>

        <Typography
          component="p"
          variant="p"
          sx={{ fontWeight: 700, fontSize: "2.5rem" }}
        >
          {policy?.subtitle}
        </Typography>

        {policy?.text?.map((text, index) => (
          <Typography
            component="p"
            variant="p"
            sx={policiesStyles.text}
            key={index}
          >
            {text}
          </Typography>
        ))}
      </Stack>
    </>
  );
};
