import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

const useServerSearch = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  const onClick = ({ id, type }: { id: string; type: string }) => {
    setOpen(false);
    return type === 'member'
      ? router.push(`/servers/${params?.serverId}/conversations/${id}`)
      : router.push(`/servers/${params?.serverId}/channels/${id}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'q' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((prevOpen) => !prevOpen);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { open, setOpen, onClick };
};

export default useServerSearch;
