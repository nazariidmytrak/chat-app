import axios from 'axios';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FormValues } from '../../interface';
import { formSchema } from '../../schema';

export const useServerCreateForm = (
  isInitialModal: boolean,
  onClose: () => void
) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
    },
  });

  const router = useRouter();
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/servers', values);
      form.reset();
      const serverId = response.data.id;
      if (isInitialModal) {
        window.location.reload();
      } else {
        router.push(`/servers/${serverId}`);
        router.refresh();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { form, isLoading, onSubmit };
};
