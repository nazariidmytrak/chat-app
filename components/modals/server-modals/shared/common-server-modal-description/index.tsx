interface Props {
  actionType: string;
  serverName: string;
}

const CommonServerModalDescription = ({ actionType, serverName }: Props) => {
  return (
    <>
      Are you sure you want to {actionType}
      <span className='font-semibold text-indigo-500 pl-1'>{serverName}</span>
      ?<br />
      <span className='font-bold'>This action can not be undone!</span>
    </>
  );
};

export default CommonServerModalDescription;
