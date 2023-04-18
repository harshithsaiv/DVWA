import { Box, Card, Rating } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H5, Small } from "components/Typography";
import { FC } from "react";

const TopSelling: FC = () => {
  return (
    <Card sx={{ padding: "2rem", height: "100%" }}>
      <H5>Top vulnerabilities Today</H5>

      {productList.map((product, index) => (
        <FlexBox key={index} mt="1.2rem">
          <img src={product.image} alt="Men Keds" width="90px" />

          <Box display="flex" flexDirection="column" ml="1rem">
            <Small>{product.title}</Small>
            {/* <Rating
              name="read-only"
              size="small"
              defaultValue={product.rating}
              readOnly
              sx={{ my: "3px" }}
            /> */}
            <Small fontWeight={600}>{product.readTime} mins</Small>
          </Box>
        </FlexBox>
      ))}
    </Card>
  );
};

const productList = [
  {
    title: "Open Source codebases vulnerability up by 4%",
    image: "/static/products/hacking-img.bmp ",
    readTime: 5,
  },
  {
    title: "How to Use AI in Cybersecurity and Avoid Being Trapped",
    image: "/static/products/humanoid.bmp",
    readTime: 4,
  },
  {
    title: "How cybersecurity executives make the case for continued tech investments in a tough economy",
    image: "/static/products/cyberworld.bmp",
    readTime: 3,
  },
];

export default TopSelling;
