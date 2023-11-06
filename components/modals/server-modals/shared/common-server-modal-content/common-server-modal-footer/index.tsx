import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Props {
  isLoading: boolean;
  onClose: () => void;
  onClick: () => Promise<void>;
}

const CommonServerFooter = ({ isLoading, onClose, onClick }: Props) => {
  return (
    <DialogFooter className='bg-gray-100 px-6 py-4'>
      <div className='flex items-center justify-between w-full'>
        <Button variant='ghost' disabled={isLoading} onClick={onClose}>
          Cancel
        </Button>
        <Button variant='primary' disabled={isLoading} onClick={onClick}>
          Confirm
        </Button>
      </div>
    </DialogFooter>
  );
};

export default CommonServerFooter;
