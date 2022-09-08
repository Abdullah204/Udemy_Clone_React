import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import myAcordionStyles from "./myAcordionStyles.module.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { createMuiTheme } from "@mui/material";

function MyAccordion(props) {
  function createItem(item) {
    let res = [];
    let icon = item.is_coding_exercise ? (
      <AiOutlineFile />
    ) : (
      <BsPlayCircleFill className={myAcordionStyles["play"]} />
    );

    let name = item.can_be_previewed ? (
      <span className={myAcordionStyles["purple"]}> {item.title}</span>
    ) : (
      <span className={myAcordionStyles["black"]}> {item.title}</span>
    );
    let preview = item.can_be_previewed ? (
      <span className={myAcordionStyles["preview"]}>Preview</span>
    ) : (
      ""
    );
    let time = (
      <span className={myAcordionStyles["grey"]}>{item.content_summary}</span>
    );
    res.push(icon);
    res.push(name);
    res.push(preview);
    res.push(time);
    //console.log(res);
    return <div className={myAcordionStyles["details-row"]}>{res}</div>;
  }
  //console.log(props);
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
            {props.data.lecture_count} Lectures •{" "}
            {Math.round(props.data.content_length / 3600) > 0
              ? Math.round(props.data.content_length / 3600) + "hrs  "
              : ""}
            {Math.round(props.data.content_length / 60) % 60}min
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails className={myAcordionStyles["accordion-details"]}>
        {props.data.items.map((item) => {
          //console.log(item);
          let itemjsx = createItem(item);
          //console.log(itemjsx);
          return itemjsx;
        })}
        {/* <div className={myAcordionStyles["details-row"]}>
          <BsPlayCircleFill className={myAcordionStyles["play"]} />
          <span className={myAcordionStyles["purple"]}>Installing Python</span>
          <span className={myAcordionStyles["right"]}>
            <span className={myAcordionStyles["preview"]}>Preview</span>
            <span className={myAcordionStyles["grey"]}>04:07</span>
          </span>
        </div>
        <div className={myAcordionStyles["details-row"]}>
          <BsPlayCircleFill className={myAcordionStyles["play"]} />
          <span className={myAcordionStyles["black"]}>Hello World</span>
          <span className={myAcordionStyles["right"]}>
            <span className={myAcordionStyles["grey"]}>01:39</span>
          </span>
        </div>
        <div className={myAcordionStyles["details-row"]}>
          <AiOutlineFile />
          <span className={myAcordionStyles["black"]}>Exercise files</span>
          <span className={myAcordionStyles["right"]}>
            <span className={myAcordionStyles["grey"]}>7 pages</span>
          </span>
        </div> */}
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;

/*<Accordion className={courseContentStyles["accordion"]}>
              <AccordionSummary
                className={courseContentStyles["accordion-summary"]}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                
                <div className={courseContentStyles["section-data"]}>
                  <h4 className={courseContentStyles["section-title"]}>
                    Up and Running With Python
                  </h4>
                  <span className={courseContentStyles["duration"]}>
                    2 Lectures • 6min
                  </span>
                </div>
                
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>*/
