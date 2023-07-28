// src/App.tsx

import React from "react";
import Accordion from "./Accordian";
import SelectBox from "./SelectBox";

const App: React.FC = () => {
  return (
    <div>
      <Accordion title="Section 1">
        <p>Content of section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content of section 2</p>
      </Accordion>

      <SelectBox
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={(selectedValue) => {
          console.log("Selected value:", selectedValue);
        }}
      />
    </div>
  );
};

export default App;
