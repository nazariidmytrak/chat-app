import { Search } from 'lucide-react';

interface Props {
  onClick: () => void;
}

const ServerSearchButton = ({ onClick }: Props) => {
  return (
    <button
      className='group flex items-center gap-x-2 w-full px-2 py-2 transition rounded-md
      hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50'
      onClick={onClick}
    >
      <Search className='w-4 h-4 text-zinc-500 dark:text-zinc-400' />
      <p
        className='font-semibold text-sm text-zinc-500 transition 
        group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300'
      >
        Search
      </p>
      <kbd
        className='inline-flex items-cursor-pointer ml-auto h-5 gap-1 px-1.5 border rounded
         pointer-events-none select-none bg-muted font-mono font-medium text-[12px] text-muted-foreground'
      >
        <span className='text-sm'>CTRL</span>Q
      </kbd>
    </button>
  );
};

export default ServerSearchButton;
