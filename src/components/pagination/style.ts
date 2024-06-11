import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  font-size: 18px;
  color: white;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const PaginationButton = styled.div<{ $isActive: boolean }>`
  margin: 0 16px;
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
  //color: ${({ $isActive }) => ($isActive ? 'inherit' : 'transparent')};
`;

export const Num = styled.div<{ $isActive: boolean }>`
  margin: 0 8px;
  border-radius: 50%;
  background: ${({ $isActive }) => ($isActive ? 'white' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#401978' : 'white')};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #401978;
  }
`;
