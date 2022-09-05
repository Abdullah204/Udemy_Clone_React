import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import myAcordionStyles from "./myAcordionStyles.module.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";

function MyAccordion() {
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
            Up and Running With Python
          </h4>
          <span className={myAcordionStyles["duration"]}>
            2 Lectures • 6min
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails className={myAcordionStyles["accordion-details"]}>
        <div className={myAcordionStyles["details-row"]}>
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
        </div>
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
