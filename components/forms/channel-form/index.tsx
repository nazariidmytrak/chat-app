import { Form } from '@/components/ui/form';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import InputField from '../shared/fields/inputField';
import SelectField from './fields/select-field';
import { useChannelForm } from './hooks/use-channel-form';

interface Props {
  buttonLabel: string;
  onClose: () => void;
}

const ChannelForm = ({ buttonLabel, onClose }: Props) => {
  const { form, isLoading, onSubmit } = useChannelForm({ onClose });
  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-8 px-6'>
          <InputField
            placeholder='Enter channel name'
            label='Channel name'
            fieldName='name'
            control={form.control}
            isLoading={isLoading}
          />
          <SelectField
            control={form.control}
            fieldName='type'
            label='Channel type'
            isLoading={isLoading}
          />
        </div>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
          <Button variant='primary' disabled={isLoading}>
            {buttonLabel}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default ChannelForm;
