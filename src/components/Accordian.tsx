// src/components/Accordion.tsx

import React, { useState, ReactNode } from "react";
import styled from "styled-components";

// AccordionItem 컴포넌트는 Accordion 내에서 각 섹션을 표현합니다.
const AccordionItem = styled.div`
  /* 스타일을 추가하세요 (예: 배경색, 패딩, 테두리 등) */
`;

const AccordionTitle = styled.h3`
  cursor: pointer;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionItem>
      <AccordionTitle onClick={toggleAccordion}>{title}</AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;
