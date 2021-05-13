export enum FieldType {
  input,
  boolean,
  date,
  select,
  multiple,
  number,
}

interface BaseFormField {
  property: string;
  label: string;
  description?: string;
  type: FieldType;
}

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface InputField extends BaseFormField {
  value?: string;
}

export interface BooleanField extends BaseFormField {
  value?: boolean;
  showField?: InputField[];
}

export interface DateField extends BaseFormField {
  value?: Date;
}

export interface SelectField extends BaseFormField {
  value?: string;
  options: FormFieldOption[];
}

export interface MultipleField extends BaseFormField {
  values?: string[];
  options: FormFieldOption[];
}

export interface NumberField extends BaseFormField {
  value?: number;
}

export type FormField =
  | InputField
  | BooleanField
  | DateField
  | SelectField
  | MultipleField;

export interface FormSection {
  label: string;
  fields: FormField[];
}

export interface Form {
  sections: FormSection[];
}
