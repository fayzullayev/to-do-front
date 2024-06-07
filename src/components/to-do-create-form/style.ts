import styled from 'styled-components';

export const ToDoCreateFormContainer = styled.section`
  padding: 32px;
  //border: 1px solid white;

  padding-top: 0;

  h2 {
    color: #d7d3d3;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;

export const ToDoCreateFormInputContainer = styled.div`
  display: flex;
  height: 48px;
`;

export const ToDoCreateFormInput = styled.input`
  border: none;
  outline: none;
  padding-left: 16px;
  //height: 32px;
  font-size: 20px;
  flex: 1;
`;
export const ToDoCreateFormButton = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: white;
  font-weight: bold;
  background: #fe6a6b;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #be4647;
  }
`;
