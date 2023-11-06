import { DialogDescription } from '@/components/ui/dialog';

interface Props {
  actionType: string;
  serverName: string;
}

const CommonServerDescription = ({ actionType, serverName }: Props) => {
  return (
    <DialogDescription className='text-center text-zinc-500'>
      Are you sure you want to {actionType}
      <span className='font-semibold text-indigo-500 pl-1'>{serverName}</span>
      ?<br />
      <p className='font-bold'>This action can not be undone!</p>
    </DialogDescription>
  );
};

export default CommonServerDescription;
