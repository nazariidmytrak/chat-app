import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';

import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { formSchema } from './schema';
import FileUploadField from './fields/fileUploadField';
import InputField from './fields/inputField';
import { FormValues } from './interface';

const ServerCreateForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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
