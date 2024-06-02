import React from "react";
import { Container, Box } from "@mui/material";
import style from "../../../style/page.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Noto_Serif } from "next/font/google";
const noto2 = Noto_Serif({ subsets: ["latin"],display: 'swap' , weight: "400" });
const noto3 = Noto_Serif({ subsets: ["latin"],display: 'swap' , weight: "300" });

import { GoalContent, GoalHeading } from "./GoalStyle";
const ChineseGoal = ({ content }) => {
  const [text] = useTypewriter({
    words: [content.chinese_heading],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 100,
  });
  return (
    <Container maxWidth className={style.goal_container}>
      <Box>
        <GoalHeading className={noto2.className} component={"span"}>
          {text}
        </GoalHeading>
        <GoalHeading component={"span"}>
          <Cursor cursorColor="black" />
        </GoalHeading>
      </Box>
      <GoalContent className={noto3.className}>{content.Chinese}</GoalContent>
    </Container>
  );
};
export default ChineseGoal;
