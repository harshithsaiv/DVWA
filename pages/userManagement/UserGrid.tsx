import { Box, Grid, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import SearchInput from "components/SearchInput";
import UserCard from "components/userManagement/UserCard";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));

const UserGrid: FC = () => {
  // change navbar title
  useTitle("Various Attacks");

  const navigate = useNavigate();
  // const handleAddUser = () => navigate("/dashboard/add-user");

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Search attack..." />
        {/* <Button variant="contained" onClick={handleAddUser}>
          Add New User
        </Button> */}
      </StyledFlexBox>

      <Grid container spacing={3}>
        {userList.map((user, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const userList = [
  {
    cover: "/static/cover/cover-brute-force.bmp",
    avatar: "/static/attacks/brute-force.bmp",
    name: "Brute Force",
    position: "Basic",
  },
  {
    cover: "/static/cover/cover-command-injection.bmp",
    avatar: "/static/attacks/command-injection.png",
    name: "Command Injection",
    position: "Basic",
  },
  {
    cover: "/static/cover/cover-CSRF.png",
    avatar: "/static/attacks/CSRF.bmp",
    name: "CSRF",
    position: "Basic",
  },
  {
    cover: "/static/cover/cover-file-inclusion.png",
    avatar: "/static/attacks/file-inclusion.bmp",
    name: "File Inclusion",
    position: "Intermediate",
  },
  {
    cover: "/static/cover/cover-file-upload.png",
    avatar: "/static/attacks/file-upload.bmp",
    name: "File Upload",
    position: "Intermediate",
  },
  {
    cover: "/static/cover/cover-captcha.png",
    avatar: "/static/attacks/captcha.bmp",
    name: "Insecure Captcha",
    position: "Intermediate",
  },
];

export default UserGrid;
