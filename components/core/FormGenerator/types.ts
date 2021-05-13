import { RegisterOptions } from 'react-hook-form';

import { ModelTypes } from '#/packages/entities/types';

export interface Option {
  value: string;
  label: string;
}

export type FieldType = 'select' | 'text' | 'checkbox';

export interface Field {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  defaultValue?: string | boolean | number;
  rules?: RegisterOptions;
  // TODO: Add custom styles mapped by material ui
}

export interface SelectField extends Field {
  type: 'select';
  options?: Option[];
  model?: ModelTypes;
}

export type FieldFormats = SelectField | Field;
export interface Column {
  field: Field | SelectField;
}
export interface Row {
  columns: Column[];
}

export interface Form {
  submitLabel?: string;
  fields: FieldFormats[];
}
