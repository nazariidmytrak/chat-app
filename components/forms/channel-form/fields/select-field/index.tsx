import { ChannelType } from '@prisma/client';
import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  isLoading: boolean;
}

const SelectField = <T extends FieldValues>({
  control,
  fieldName,
  label,
  isLoading,
}: Props<T>) => {
  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='uppercase text-xs text-zinc-500 font-bold dark:text-secondary/70'>
            {label}
          </FormLabel>
          <Select
            disabled={isLoading}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger
                className='bg-zinc-300/50 text-black border-0 ring-offset-0 capitalize outline-none 
              focus:ring-0 focus:ring-offset-0 '
              >
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(ChannelType).map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className='capitalize transition cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800'
                >
                  {type.toLowerCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
