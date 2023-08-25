import { Link } from "react-router-dom";
import React, { useState, useEffect, ReactNode } from "react";

import styled from "styled-components";

const TemplateBox = styled.div`
  padding-top: 20px;
  max-height: 100vh;
`;

const TemplateTitle = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6c567b;
`;

interface TemplateProps {
  screenWidth: number;
  children: ReactNode;
  todoLength: number;
}

const Template: React.FC<TemplateProps> = ({
  screenWidth,
  children,
  todoLength
}) => {
  return (
    <TemplateBox>
      <TemplateTitle>오늘 할 일 ({todoLength})</TemplateTitle>
      <div>{children}</div>
    </TemplateBox>
  );
};

export default Template;
