// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link as RRLink, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BsFillBugFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineDownload } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Stack,
  styled,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { colors } from "../../styles/globals";
//import LOGO from "../../assets/logo.jpg";

const navLinks = [
  { page: "home", url: "/", no: "01." },
  { page: "experience", url: "/beneficiary", no: "02." },
  { page: "work", url: "/winners", no: "03." },
  { page: "contact", url: "/contact", no: "04." },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const StyledNavLink = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  fontWeight: "300",
  fontSize: ["1rem", "0.8rem"],
  cursor: "pointer",
  marginRight: "2.8rem",
  // marginBottom: ["0rem", "0.5rem"],
});

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.NAV_TEXT,
  "&:hover": {
    color: colors.ORANGE,
  },
});

const StyledMobileContainer = styled(Box)({
  position: "absolute",
  height: "100vh",
  width: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  // backgroundColor: "rgb(19, 28, 27)",
  top: "0",
  right: 0,
  padding: "1rem 0 ",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

const MobileLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.NAV_TEXT,
  margin: "3rem 0",
  textTransform: "capitalize",
  fontWeight: 700,
  fontSize: "16px",
  display: "flex",
  flexDirection: "row",

  "&:last-child": {
    marginBottom: 0,
  },
  "&:hover": {
    color: colors.ORANGE,
    textDecoration: "underline",
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgb(13, 28, 27)",
          padding: "0rem",
          boxShadow: "none",
        }}
      >
        <Box
          color={colors.WHITE}
          // width={["90%", "90%"]}
          marginY={["1rem", "1rem"]}
          padding={["0", "1rem"]}
          position={"sticky"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            paddingX={["1rem", "0rem"]}
            position={"relative"}
            sx={{
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "space-between",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
            width={"100%"}
            maxWidth={["100%", "100%", "100%", "1200px"]}
            marginX={"auto"}
          >
            <Box
              width={["auto", "16.779%"]}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flex={1}
              ml={[0, "20px"]}
            >
              <Box>
                <RRLink to={"/"}>
                  <Typography fontSize={"2.0rem"} color={colors.ORANGE}>
                    <BsFillBugFill />
                  </Typography>
                </RRLink>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <Stack direction={"row"}>
                  {navLinks.map((ele) => (
                    <StyledNavLink key={ele.url}>
                      <Typography color={colors.ORANGE} fontSize={"0.7rem"}>
                        {ele.no}
                      </Typography>
                      <StyledLink
                        to={ele.url}
                        underline="none"
                        color={colors.NAV_TEXT}
                      >
                        {ele.page}
                      </StyledLink>
                    </StyledNavLink>
                  ))}
                  <Button
                    variant="outlined"
                    endIcon={<AiOutlineDownload />}
                    sx={{
                      color: colors.ORANGE,
                      borderColor: colors.ORANGE,
                      textTransform: "capitalize",
                      "&:hover": {
                        borderColor: colors.OFF_WHITE,
                      },
                    }}
                  >
                    Resume
                  </Button>
                </Stack>
              </Box>
              <Box
                display={["block", "none"]}
                fontSize={"1.5rem"}
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
                color={colors.ORANGE}
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <RxHamburgerMenu />
              </Box>
            </Box>
          </Stack>
        </Box>
        {navbarOpen && (
          <StyledMobileContainer boxShadow={2}>
            <Stack
              direction={"column"}
              alignItems={"center"}
              width={"70%"}
              height={"100vh"}
              padding={"1rem"}
              backgroundColor={colors.MOBILENAV}
            >
              <Box
                display={["block", "none"]}
                fontSize={"1.5rem"}
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
                color={colors.ORANGE}
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                  position: "absolute",
                  right: "0",
                  marginRight: "1rem",
                }}
              >
                <GrFormClose />
              </Box>
              {navLinks.map((ele) => (
                <MobileLink
                  to={ele.url}
                  key={ele.url}
                  underline="none"
                  color={colors.NAV_TEXT}
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                  }}
                >
                  <Typography color={colors.ORANGE} fontSize={"0.7rem"}>
                    {ele.no}
                  </Typography>
                  {ele.page}
                </MobileLink>
              ))}
              <Button
                variant="outlined"
                endIcon={<AiOutlineDownload />}
                sx={{
                  color: colors.ORANGE,
                  borderColor: colors.ORANGE,
                  textTransform: "capitalize",
                  marginTop: "2rem",
                }}
              >
                Resume
              </Button>
            </Stack>
          </StyledMobileContainer>
        )}
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
