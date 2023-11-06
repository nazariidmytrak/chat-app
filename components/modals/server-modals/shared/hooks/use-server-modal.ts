import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const useServerActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const performServerAction = async (serverId: string, type: string) => {
    try {
      setIsLoading(true);

      type === 'leave'
        ? await axios.patch(`/api/servers/${serverId}/leave`)
        : await axios.delete(`/api/servers/${serverId}`);

      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, performServerAction };
};

export default useServerActions;
