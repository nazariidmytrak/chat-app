import { Form } from '@/components/ui/form';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FileUploadField from './fields/fileUploadField';
import InputField from './fields/inputField';
import { useServerCreateForm } from './hooks/useServerCreateForm';

interface Props {
  isInitialModal: boolean;
  onClose: () => void;
}

const ServerCreateForm = ({ isInitialModal, onClose }: Props) => {
  const { form, isLoading, onSubmit } = useServerCreateForm(
    isInitialModal,
    onClose
  );

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-8 px-6'>
          <div className='flex items-center justify-center text-center'>
            <FileUploadField fieldName='imageUrl' control={form.control} />
          </div>
          <InputField
            fieldName='name'
            control={form.control}
            isLoading={isLoading}
          />
        </div>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
          <Button variant='primary' disabled={isLoading}>
            Create
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default ServerCreateForm;
