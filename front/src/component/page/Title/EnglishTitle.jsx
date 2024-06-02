import React from "react";
import { Box, Container, Divider } from "@mui/material";
import style from "../../../style/page.module.css";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["cyrillic"], display: 'swap' ,weight: "700" });
import { Prompt } from "next/font/google";
import { Content, FLEX, Heading, Subtitle } from "./TittleStyle";
const prompt = Prompt({ subsets: ["vietnamese"], display: 'swap' ,weight: "500" });

const EnglishTitle = ({ title }) => {
  return (
    <Container maxWidth className={style.title_container}>
      <FLEX>
        <Heading className={pt_sans.className}>{title.english_heading}</Heading>
        <Divider component="span" className={style.divider} />
      </FLEX>
      <Box width={"90vw"}>
        <Subtitle className={pt_sans.className}>
          {title.english_subtitle}
        </Subtitle>
        <Content className={prompt.className}>{title.english_content}</Content>
      </Box>
    </Container>
  );
};

export default EnglishTitle;
