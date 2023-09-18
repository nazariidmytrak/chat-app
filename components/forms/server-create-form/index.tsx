import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formSchema } from './form-schema';

const ServerCreateForm = () => {
  const form = useForm({
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
            Image Upload
          </div>
          <FormField
            name='name'
            control={form.control}
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
