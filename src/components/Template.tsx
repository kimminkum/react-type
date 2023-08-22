import { Link } from "react-router-dom";
import React, { useState, useEffect, ReactNode } from "react";

import styled from "styled-components";

interface TemplateProps {
  screenWidth: number;
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ screenWidth, children }) => {
  return (
    <div>
      <div>오늘 할 일</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
