'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';

interface Props {
  value: string;
  onChange: (url?: string) => void;
  endpoint: 'messageFile' | 'serverImage';
}

const FileUpload = ({ value, onChange, endpoint }: Props) => {
  const fileType = value?.split('.').pop();
  if (value && fileType !== 'pdf') {
    return (
      <div className='relative h-20 w-20'>
        <Image
          className='rounded-full'
          fill
          src={value}
          alt='Upload'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <button
          className='absolute top-0 right-0 p-1 bg-rose-500 text-white rounded-full shadow-sm'
          onClick={() => onChange('')}
        >
          <X className='h-4 w-4' />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      className='cursor-pointer'
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
