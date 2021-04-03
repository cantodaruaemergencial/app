import { Container } from 'next/app';

import Select, { ISelect } from '#/components/core/Select';

type IFormTypes = 'select';

interface IFormSelect {
  type: IFormTypes;
  values: ISelect;
  key: string;
}

const formGeneratorInputs = {
  select: Select,
};

export default function FormGenerator(
  formData: IFormSelect[],
): React.ReactElement {
  return (
    <Container id="formContainer">
      <div>bla</div>
    </Container>
  );
}
