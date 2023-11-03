import { useEffect } from 'react';
import { Server } from '@prisma/client';

import { Form } from '@/components/ui/form';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FileUploadField from './fields/fileUploadField';
import InputField from './fields/inputField';
import { useServerForm } from './hooks/use-server-form';

interface Props {
  buttonLabel: string;
  isInitialModal: boolean;
  onClose: () => void;
  server?: Server;
}

const ServerForm = ({
  isInitialModal,
  onClose,
  buttonLabel,
  server,
}: Props) => {
  const { form, isLoading, onSubmit } = useServerForm({
    isInitialModal,
    onClose,
    server,
  });

  useEffect(() => {
    if (server) {
      form.setValue('name', server.name);
      form.setValue('imageUrl', server.imageUrl);
    }
  }, [server, form]);

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
            {buttonLabel}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default ServerForm;
