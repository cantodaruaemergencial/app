import { ReactElement } from 'react';

interface Props {
  fetchData: Promise<any>;
}

const DashboardGenderComponent = ({ fetchData }: Props): ReactElement => {
  fetchData.then((data) => {    
    console.log(data);
  });

  return (
    <ul>
      <li>Lista</li>
    </ul>
  );
};

export default DashboardGenderComponent;
