export enum FieldType {
  input,
  boolean,
  date,
  select,
  multiple,
  number,
}

export interface FormField {
  property: string;
  label: string;
  description?: string;
  type: FieldType;
  value?: string | string[] | number;
  options?: FormFieldOption[];
}

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormSection {
  label: string;
  fields: FormField[];
}

export interface Form {
  sections: FormSection[];
}
