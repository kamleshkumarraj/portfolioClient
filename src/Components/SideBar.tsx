import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
import { navLinks } from './Header';

const SideBar=()=> {
  const [opened, { toggle }] = useDisclosure(false);
  const size=useMatches({
   xs:'lg',
   sm:'xl'
});

  return (
    <>
      <Drawer.Root  className='bs:hidden !-z-10'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className='!-z-0' bg="#112240">
          <Drawer.Body className='flex flex-col gap-5 mt-20 xs:mt-24' bg="#112240">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:!hidden !z-50 relative' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
    </>
  );
}
export default SideBar;