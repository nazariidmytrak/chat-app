import { FormField, FormItem, FormControl } from '@/components/ui/form';
import FileUpload from '@/components/actions/file-upload';
import { CommonFieldProps } from '../../interface';

const FileUploadField = ({ fieldName, control }: CommonFieldProps) => {
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
