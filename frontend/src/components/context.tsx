import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface DataType {
  nuur: boolean;
  hool: boolean;
  hurgelt: boolean;
  sags: boolean;
  newtreg: boolean;
}
// interface InputData {
//   name: string;
// }

// interface ArrayItem {
//   name: string;
// }

export interface GlobalContext {
  color: DataType;
  setColor: Dispatch<SetStateAction<DataType>>;
  openCNC: () => void;
  close: () => void;
  isOpen: boolean;
}

type ContainerProps = {
  children: ReactNode;
};

export const MyGlobalContext = createContext<GlobalContext>(
  {} as GlobalContext
);

export const useGlobalContext = () => useContext(MyGlobalContext);
export const MyGlobalContextProvider = ({ children }: ContainerProps) => {
  const [color, setColor] = useState<DataType>({
    nuur: false,
    hool: false,
    hurgelt: false,
    sags: false,
    newtreg: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const openCNC = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  // =============================================================
  // =============================================================
  return (
    <MyGlobalContext.Provider
      value={{
        color,
        setColor,
        openCNC,
        close,
        isOpen,
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

// const [isHeeder1, setIsHeeder1] = useState(false);
//   const [isHeeder2, setIsHeeder2] = useState(false);
//   const [isHeeder3, setIsHeeder3] = useState(false);
//   const [isHeeder4, setIsHeeder4] = useState(false);
//   const [isHeeder5, setIsHeeder5] = useState(false);
//   const handleClick = (setter: Dispatch<React.SetStateAction<boolean>>) => {
//     setIsHeeder1(false);
//     setIsHeeder2(false);
//     setIsHeeder3(false);
//     setIsHeeder4(false);
//     setIsHeeder5(false);
//     setter(true);
//   };
