import { NoDataContainer } from './style.ts';

function NoData() {
  return (
    <NoDataContainer>
      <i className="fas fa-database"></i>
      <h3>There are not any tasks</h3>
    </NoDataContainer>
  );
}

export default NoData;
