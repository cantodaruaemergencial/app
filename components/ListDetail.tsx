import { ReactElement } from 'react';

import { User } from '../interfaces';

interface ListDetailProps {
  item: User;
}

const ListDetail = ({ item: user }: ListDetailProps): ReactElement => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
