import NavigationSidebar from '@/components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='h-full hidden w-[72px] fixed z-30 flex-col inset-y-0 md:flex'>
        <NavigationSidebar />
      </div>
      <main className='h-full md:pl-[72px]'>{children}</main>
    </div>
  );
};

export default MainLayout;
