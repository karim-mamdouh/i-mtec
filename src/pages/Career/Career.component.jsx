import React from "react";
import { Banner } from "../../components/atoms";
import { Stack, Typography } from "@mui/material";
import { careerStyle } from "./Career.style";
import Form from "../../components/organisms/Form/Form.component";
import { formFields } from "./data/career";

export const Career = () => {
  return (
    <>
      <Banner title="We Need Your Expertise" />
      <Stack sx={careerStyle.container}>
        <Typography variant="p" component="p" sx={careerStyle.text}>
          We’re searching for innovative thinkers to collaborate and grow in the
          creative technology space. There is no blueprint for what we’re trying
          to accomplish. We give our team members the autonomy to try new things
          and achieve their goals.
        </Typography>
        <Typography variant="p" component="p" sx={careerStyle.text}>
          At iMT you’ll have the resources and support you need to advance your
          career and industry knowledge.
        </Typography>
        <Typography variant="p" component="p" sx={careerStyle.text}>
          Come join us to collaborate on ambitious projects in an inspirational
          and fun work environment. A trailblazing, fast-growing company with an
          incredibly talented team are just a few reasons why you’ll love it
          here.
        </Typography>
        <Stack component="section" sx={careerStyle.formSection}>
          <Form
            formControllers={formFields}
            maxWidth="auto"
            btnTitle="Apply Now"
          ></Form>
        </Stack>
      </Stack>
    </>
  );
};
