import { Box, Stack, Typography } from "@mui/material";
import { contactStyles } from "./ContactUs.style";
import { contactFormFields } from "./data/contact";
import { Banner } from "../../components/atoms";
import { Form } from "../../components/organisms";

export const ContactUs = () => {
  return (
    <>
      <Banner title="Contact iMT" />
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          // alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "100%", sm: "80%" },
          margin: "0 auto",
          padding: "3rem 0",
        }}
      >
        {/* <Stack component="section"></Stack> */}
        {/* <Divider sx={contactStyles.divider}></Divider> */}
        <Stack component="section" sx={contactStyles.formSection}>
          <Form formControllers={contactFormFields} maxWidth="auto"></Form>
        </Stack>
        <Stack component="section" sx={contactStyles.address}>
          <Stack component="ul" sx={contactStyles.addressList}>
            <Typography component="li">
              <Box
                component="a"
                href="geo:30.602947,32.207170;"
                target="_blank"
                sx={contactStyles.addressText}
              >
                {/* <FmdGoodIcon /> Ismailiya - Public Free Zone | Ismailiya, Egypt */}
                Public Free Zone
                <br />
                Ismailia, Egypt
              </Box>
            </Typography>
            <Typography component="li">
              <Box
                target="_blank"
                component="a"
                href="mailto:info@i-mtec.com"
                sx={contactStyles.addressText}
              >
                Email:{" "}
                <Typography
                  component="span"
                  sx={{
                    textDecoration: "underline",
                    fontSize: { xs: "1rem", md: "1.5rem" },
                  }}
                >
                  info@i-mtec.com
                </Typography>
              </Box>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
