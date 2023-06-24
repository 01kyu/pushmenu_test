import {FC, useState} from 'react'
import { PushMenu } from "../widgets";
import "./normalize.css";

export const App: FC = () => {
    const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                {menuVisibility? <PushMenu visible={setMenuVisibility} /> :<button onClick={() => setMenuVisibility(true)}>show</button>}
            </div>
        </>
    );
}

