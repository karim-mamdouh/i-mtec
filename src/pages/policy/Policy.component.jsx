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
      setPolicy(policies.vision);
    } else if (url.includes("mission")) {
      setPolicy(policies.misson);
    } else if (url.includes("quality")) {
      setPolicy(policies.quality);
    }
  }, []);

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

        {policy?.text?.map((text) => (
          <Typography component="p" variant="p" sx={policiesStyles.text}>
            {text}
          </Typography>
        ))}
      </Stack>
    </>
  );
};
