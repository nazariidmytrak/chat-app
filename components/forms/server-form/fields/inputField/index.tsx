import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputFieldProps } from '../../interface';

const InputField = ({ fieldName, control, isLoading }: InputFieldProps) => {
  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='uppercase text-xs text-zinc-500 font-bold dark:text-secondary/70'>
            Server name
          </FormLabel>
          <FormControl>
            <Input
              className='border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0'
              disabled={isLoading}
              placeholder='Enter server name'
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
