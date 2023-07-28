// src/components/Selectbox.tsx

import React from "react";
import styled from "styled-components";

const Select = styled.select`
  /* 스타일을 추가하세요 (예: 폰트 크기, 패딩, 색상 등) */
`;

interface SelectboxProps {
  options: string[];
  onChange: (selectedValue: string) => void;
}

const SelectBox: React.FC<SelectboxProps> = ({ options, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <Select onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
