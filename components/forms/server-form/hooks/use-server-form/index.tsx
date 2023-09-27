import axios from 'axios';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Server } from '@prisma/client';

import { FormValues } from '@/components/forms/server-form/interface';
import { formSchema } from '@/components/forms/server-form/schema';

interface Props {
  isInitialModal: boolean;
  onClose: () => void;
  server?: Server;
}

export const useServerForm = ({ isInitialModal, onClose, server }: Props) => {
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
      if (server) {
        await axios.patch(`/api/servers/${server.id}`, values);
      } else {
        const response = await axios.post('/api/servers', values);
        const serverId = response.data.id;

        if (isInitialModal) {
          window.location.reload();
        } else {
          router.push(`/servers/${serverId}`);
        }
      }

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.error('Error submitting server form:', error);
    }
  };

  return { form, isLoading, onSubmit };
};
