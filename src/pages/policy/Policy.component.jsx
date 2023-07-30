import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { policies } from "./data/policy";
import { policiesStyles } from "./Policy.style";

export const Policy = () => {
  const [policy, setPolicy] = useState();

  useEffect(() => {
    const url = window.location.href;
    console.log(url);
    if (url.includes("vision")) {
      setPolicy(policies.vision);
    } else if (url.includes("mission")) {
      setPolicy(policies.misson);
    } else if (url.includes("quality")) {
      setPolicy(policies.quality);
    }
  }, []);

  console.log(policy);

  return (
    <Stack component="section" sx={policiesStyles.container}>
      <Box component="figure">
        <Box
          component="img"
          src={policy?.image}
          sx={policiesStyles.image}
        ></Box>
      </Box>

      {policy?.text?.map((text) => (
        <Typography component="p" sx={policiesStyles.text}>
          {text}
        </Typography>
      ))}
    </Stack>
  );
};
