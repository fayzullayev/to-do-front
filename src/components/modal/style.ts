import styled from 'styled-components';

export const ModalContainer = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const ModalContent = styled.section`
  min-width: 300px;
  padding: 16px;
  border-radius: 8px;
  background: #d7d3d3;

  margin-top: 200px;
`;
