import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse, Card, Stack } from "react-bootstrap";
import CompanyCard from "./Companycard";

const MyExperience = () => {
  const [open, setOpen] = useState(false);

  const toggleCard = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Stack
        direction="horizontal"
        gap={3}
        onClick={toggleCard}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{
          borderColor: "rgb(8, 121, 191)",
          borderRadius: "5px",
          border: "1px solid ",
          cursor: "pointer",
          borderBottom: "1px solid rgb(203, 203, 203)",
        }}
      >
        <div className="p-2">Work</div>
        <div className="p-2 ms-auto">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </Stack>
      <Collapse in={open}>
        <div
          id="example-collapse-text"
          className={`my-collapse ${open ? "show" : ""}`}
          style={{ marginTop: "1rem" }}
        >
          <CompanyCard />
        </div>
      </Collapse>
    </div>
  );
};

export default MyExperience;
