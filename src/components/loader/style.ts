import styled from 'styled-components';

export const LoaderContainer = styled.section`
  //border: 1px solid red;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const LoaderContent = styled.div`
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #d7d3d3) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l4 1s infinite steps(10);

  @keyframes l4 {
    to {
      transform: rotate(1turn);
    }
  }
`;
