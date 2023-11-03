import { FieldValues, FieldPath, Control } from 'react-hook-form';

export type InputFieldProps<T extends FieldValues> = {
  fieldName: FieldPath<T>;
  control: Control<T>;
  isLoading: boolean;
  label: string;
  placeholder: string;
};
