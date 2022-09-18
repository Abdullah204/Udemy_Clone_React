import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import myAcordionStyles from "./myAcordionStyles.module.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { createMuiTheme } from "@mui/material";
import AccordionItem from "./AccordionItem";
function MyAccordion(props) {
  let hours =
    Math.round(props.data.content_length / 3600) > 0
      ? Math.round(props.data.content_length / 3600) + "hrs  "
      : "";
  let mins = Math.round(props.data.content_length / 60) % 60;

  return (
    <Accordion className={myAcordionStyles["accordion"]}>
      <AccordionSummary
        className={myAcordionStyles["accordion-summary"]}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={myAcordionStyles["section-data"]}>
          <h4 className={myAcordionStyles["section-title"]}>
            {props.data.title}
          </h4>
          <span className={myAcordionStyles["duration"]}>
            {props.data.lecture_count} Lectures • {hours}
            {mins}min
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails className={myAcordionStyles["accordion-details"]}>
        {props.data.items.map((item) => {
          return <AccordionItem data={item} />;
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;
