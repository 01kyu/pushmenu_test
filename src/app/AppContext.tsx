import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { initialNodes } from "./constants"

import { INavNode } from "../entities"
import { ILanguage } from "../shared";


interface IAppContext {
    language: ILanguage,
    setLanguage: Dispatch<SetStateAction<ILanguage>>,
    uuidPath: string,
    setUUIDPath: Dispatch<SetStateAction<string>>,
    navNodes: INavNode
}
export const AppContext = createContext<IAppContext>({
    language: ILanguage.English,
    setLanguage: () => {},
    navNodes: initialNodes,
    setUUIDPath: () => {},
    uuidPath: ''
})
export const AppContextProvider = ({ children } : { children: ReactNode }) => {
    const [language, setLanguage] = useState<ILanguage>(ILanguage.Russian)
    const [uuidPath, setUUIDPath] = useState('')

    return <AppContext.Provider value={{
        navNodes: initialNodes,
        uuidPath, setUUIDPath,
        language, setLanguage
    }}>
        {children}
    </AppContext.Provider>
};

