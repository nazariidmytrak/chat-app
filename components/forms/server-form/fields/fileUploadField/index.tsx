import { Control } from 'react-hook-form';

import { FormField, FormItem, FormControl } from '@/components/ui/form';
import FileUpload from '@/components/actions/file-upload';

interface Props {
  fieldName: string;
  control: Control;
}

const FileUploadField = ({ fieldName, control }: Props) => {
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
