import React from "react";
import myAcordionStyles from "./myAcordionStyles.module.css";

function AccordionItem(props) {
  let item = props.data;
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
  return <div className={myAcordionStyles["details-row"]}>{res}</div>;
}

export default AccordionItem;
