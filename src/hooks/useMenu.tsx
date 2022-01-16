import { createContext, ReactNode, useContext, useState } from 'react';

interface MenuProviderProps {
  children: ReactNode;
}

type IMenu = {
  open: boolean;
};
interface MenuContextData {
  menu: IMenu;
  changeStatusMenu: () => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export function MenuProvider({ children }: MenuProviderProps): JSX.Element {
  const [menu, setMenu] = useState<IMenu>({
    open: false,
  });

  const changeStatusMenu = async () => {
    await setMenu({
      open: !menu.open,
    });
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        changeStatusMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  return context;
}
