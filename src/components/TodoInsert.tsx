import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTrash,
  faPencil
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0.8;
`;

const PopBox = styled.form`
  margin-left: 14%;
  position: fixed;
  top: 40%;
  left: 25%;
  right: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
  width: 50vh;
  height: 150px;
  border-radius: 5px;
  box-shadow: 2px 3px 6px 1px #f67280;
  background: white;
`;

const TxtIn = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom-color: 1px solid #f67280;

  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const SubmitBtn = styled.button`
  padding-top: 20px;
  background: none;
  outline: none;
  border: none;
  color: #f67280;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Rewright = styled.div`
  padding-top: 20px;
  background: none;
  outline: none;
  border: none;
  color: #f67280;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  & > .icons {
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
  }
`;

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoInsertProps {
  selectedTodo: Todo | null;
  onInsertToggle: () => void;
  onInsertTodo: (text: string) => void;
}

const TodoInsert: React.FC<TodoInsertProps> = ({
  selectedTodo,
  onInsertToggle,
  onInsertTodo
}) => {
  const [value, setValue] = useState("");

  const onTxtChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <Bg onClick={onInsertToggle}></Bg>
      <PopBox onSubmit={onSubmit}>
        <TxtIn
          placeholder="want"
          type="text"
          name="text"
          value={value}
          onChange={onTxtChange}
        ></TxtIn>
        {selectedTodo ? (
          <Rewright>
            <FontAwesomeIcon className="icons" icon={faTrash} />
            <FontAwesomeIcon className="icons" icon={faPencil} />
          </Rewright>
        ) : (
          <SubmitBtn type="submit" onSubmit={onSubmit}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </SubmitBtn>
        )}
      </PopBox>
    </div>
  );
};

export default TodoInsert;
