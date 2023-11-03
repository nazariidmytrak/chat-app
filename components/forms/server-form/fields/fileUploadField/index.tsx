import { Control, FieldValues, Path } from 'react-hook-form';

import { FormField, FormItem, FormControl } from '@/components/ui/form';
import FileUpload from '@/components/actions/file-upload';

interface Props<T extends FieldValues> {
  fieldName: Path<T>;
  control: Control<T>;
}

const FileUploadField = <T extends FieldValues>({
  fieldName,
  control,
}: Props<T>) => {
  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <FileUpload
              endpoint='serverImage'
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FileUploadField;
