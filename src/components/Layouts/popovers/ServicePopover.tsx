import { Apps } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, useTheme } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H6, Tiny } from "components/Typography";
import { FC, Fragment, useRef, useState } from "react";
import PopoverLayout from "./PopoverLayout";

// dummy  data
const services = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    title: "Try Hack Me",
    body: "learn cyber security using hands on exercise",
    image: "/static/connect-accounts/try-hack-me.png",
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    title: "Hack The Box",
    body: "Test ypur penetration skills",
    image: "/static/connect-accounts/hack_the_box.bmp",
  },
  {
    id: "5e8883fca0e8612044248ecf",
    title: "VulnHub",
    body: "Provides resources to machines",
    image: "/static/connect-accounts/vulnhub.bmp",
  },
];

const ServicePopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <Apps sx={{ color: "text.disabled" }} />
        </Badge>
      </IconButton>

      <PopoverLayout
        hiddenViewButton
        popoverOpen={open}
        anchorRef={anchorRef}
        title="Web apps & services"
        popoverClose={() => setOpen(false)}
      >
        {services.map((service) => (
          <ListItem service={service} key={service.id} />
        ))}
      </PopoverLayout>
    </Fragment>
  );
};

// -----------------------------------------------------------------

type ListItemProps = {
  service: {
    image: string;
    title: string;
    body: string;
  };
};
function ListItem({ service }: ListItemProps) {
  const theme = useTheme();
  const colorbg =
    theme.palette.mode === "light" ? "secondary.light" : "divider";

  return (
    <FlexBox
      p={2}
      alignItems="center"
      sx={{
        cursor: "pointer",
        "&:hover": { backgroundColor: colorbg },
      }}
    >
      <Avatar src={service.image} sx={{ width: 35, height: 35 }} />

      <Box ml={2}>
        <H6>{service.title}</H6>
        <Tiny display="block" fontWeight={500} color="text.disabled">
          {service.body}
        </Tiny>
      </Box>
    </FlexBox>
  );
}

export default ServicePopover;
