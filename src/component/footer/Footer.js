import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { HiLocationMarker } from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai"
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 3 }}
        py={{ xs: 4, sm: 7 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={10} sm={2.5}>
              <Box borderBottom={1} >CONTACT</Box>
              <div className="txtalign">
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                 <i><HiLocationMarker/></i>  New York City.
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineMail/></i> info@example.com
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><BsFillTelephoneFill/></i> +1234 567 567
                </Link>
              </Box>
              </div>
            </Grid>
           
            <Grid item xs={10} sm={2.5}>
              <Box borderBottom={1}>INFORMATION</Box>
              <div className="txtalign">
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> About Us
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Contact Us
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Short Codes
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> FAQ's
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Special Products
                </Link>
              </Box>
              </div>
            </Grid>
            <Grid item xs={10} sm={2.5}>
              <Box borderBottom={1}>CATEGORY</Box>
              <div className="txtalign">
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Groceries
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Household
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Personal Care
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Packaged Foods
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Beverages
                </Link>
              </Box>
              </div>
            </Grid>
            <Grid item xs={10} sm={2.5}>
              <Box borderBottom={1}>PROFILE</Box>
              <div className="txtalign">
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Store
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> My Cart
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                <i><AiOutlineArrowRight/></i> Login
                </Link>
              </Box>
              <Box padding={1}>
                <Link href="/" underline="none" color="inherit" className="hov">
                    <i><AiOutlineArrowRight/></i> Create Account
                </Link>
              </Box>
              </div>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs: 5, sm: 10}} pb= {{xs:5,sm:0}}>Aayush Dangol &reg;{new Date().getFullYear() } </Box>
        </Container>
      </Box>
    </footer>
  );
}
