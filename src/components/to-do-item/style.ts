import styled from 'styled-components';

export const ToDoItemContainer = styled.section`
  background-color: #5822a4;
  margin-bottom: 8px;
  padding: 8px 32px;
  display: flex;
  color: #d7d3d3;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div<{ $isChecked: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 1.5px;
  background-color: #d7d3d3;
  width: ${({ $isChecked }) => ($isChecked ? '100%' : '0')};
  transition: 0.3s;
`;

export const ToDoItemTitle = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  font-size: 18px;

  .title {
    margin-left: 4px;
  }
`;

export const ToDoItemActions = styled.div<{ $isChecked: boolean }>`
  display: flex;
  font-size: 14px;
  align-items: center;

  .edit {
    //margin-right: 8px;
    //color: #2e9f2e;
  }

  .check {
    color: ${({ $isChecked }) => ($isChecked ? '#2e9f2e' : '#d7d3d3')};
    background-color: ${({ $isChecked }) =>
      $isChecked ? '#401978' : 'transparent'};
  }

  .fas {
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    transition: 0.4s ease-in-out;

    &:hover {
      background-color: #401978;
    }
  }
`;
