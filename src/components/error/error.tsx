import { ErrorContainer } from './style.ts';

function Error() {
  return (
    <ErrorContainer>
      <i className="fas fa-exclamation-circle"></i>
      <h3>Something went wrong</h3>
    </ErrorContainer>
  );
}

export default Error;
