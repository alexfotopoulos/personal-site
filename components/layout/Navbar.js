import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from "../../public/images/personalLogoWhite.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 6 }}>
      <AppBar position="static" sx={{ backgroundColor: "#202124", boxShadow: "none" }}>
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Image src={logo} alt="personal logo" height={50} width={50} />
            </IconButton>
          </Link >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Link href="/projects"><a><Button color="inherit">Projects</Button></a></Link>
          <Link href="/about"><a><Button color="inherit">About</Button></a></Link>
          <Link href="/contact"><a><Button color="inherit">Contact</Button></a></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};