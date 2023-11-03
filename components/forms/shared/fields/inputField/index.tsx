import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputFieldProps } from '../../interface';
import { FieldValues } from 'react-hook-form';

const InputField = <T extends FieldValues>({
  fieldName,
  control,
  isLoading,
  label,
  placeholder,
}: InputFieldProps<T>) => {
  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='uppercase text-xs text-zinc-500 font-bold dark:text-secondary/70'>
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className='border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0'
              disabled={isLoading}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
