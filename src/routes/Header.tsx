import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  windowWidth: number;
  isNavToggle: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ windowWidth, onToggle }) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Header;
