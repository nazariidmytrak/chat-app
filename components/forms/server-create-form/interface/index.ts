import { Control } from 'react-hook-form';

export type FormValues = {
  name: string;
  imageUrl: string;
};

export type CommonFieldProps = {
  fieldName: 'name' | 'imageUrl';
  control: Control<FormValues>;
};

export type InputFieldProps = CommonFieldProps & {
  isLoading: boolean;
};
