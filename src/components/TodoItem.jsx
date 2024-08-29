import React, { useState } from "react";
import styled from "styled-components";

export const TodoItem = ({
  title,
  id,
  handleDelete,
  handleUpdate,
  item,
  setEditingId,
  isEditingId,
}) => {
  const [editingText, setEditingText] = useState(title);
  const handleChange = () => {
    setEditingText(event.target.value);
  };

  
  return (
    <StyledTitle>
      {isEditingId ? (
        <>
          <input type="text" value={editingText} onChange={handleChange} />
          <button onClick={() => handleUpdate(id, editingText)}> save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>

          <StyledButton onClick={() => handleDelete(id)}>delete</StyledButton>
          <StyledButton onClick={() => setEditingId(id)}>update</StyledButton>
        </>
      )}
    </StyledTitle>
  );
};

const StyledButton = styled.button`
  border-radius: 6px;
  background: #f37705;
  &hover {
    background-color: #ff912b;
  }
  &active {
    background: #cf6300;
  }
  &disabled {
    background: #c9c9c9;
  }
`;
const StyledTitle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 20px;
  }
`;
