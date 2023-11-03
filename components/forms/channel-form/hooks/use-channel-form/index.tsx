import axios from 'axios';
import * as z from 'zod';
import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ChannelType } from '@prisma/client';

import { FormValues } from '../../interface';
import { formSchema } from '../../schema';
import { useToast } from '@/components/ui/use-toast';

interface Props {
  onClose: () => void;
}

export const useChannelForm = ({ onClose }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      type: ChannelType.TEXT,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = `/api/channels?serverId=${params?.serverId}`;
      await axios.post(url, values);
      toast({
        title: 'Channel successfully created!',
      });
      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return { form, isLoading, onSubmit };
};
