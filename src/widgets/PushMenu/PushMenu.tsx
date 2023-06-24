import {Dispatch, FC, SetStateAction, useContext} from 'react'
import { AppContext } from "../../app"
import { getUUIDAllias, UUID_SEPARATOR, UuidService } from "../../entities"
import { translateMessage, useMount } from "../../shared"
import styles from "./PushMenu.module.css";
import IconRu from "../../shared/ui/icons/IconRu";
import CloseButton from "../../shared/ui/icons/CloseButton";
import ArrowRight from "../../shared/ui/icons/ArrowRight";
import ArrowLeft from "../../shared/ui/icons/ArrowLeft";

interface IProps{
    visible: Dispatch<SetStateAction<boolean>>;
}

export const PushMenu: FC<IProps> = ({visible}) => {
    const { navNodes, uuidPath, setUUIDPath, language } = useContext(AppContext)
    const uuidService = new UuidService(uuidPath)

    const isMounted = useMount()
    const isFirstNode = uuidPath === ''

    //const title = translateMessage(language, getUUIDAllias(uuidService.getLastUUID()))
    const paths = uuidService.getUUIDPaths(navNodes)

    return (
        <div className={styles.pushMenu}>
            <div className={styles.pushMenu__header}>
                <span className={styles.pushMenu__header_item}>
                    <IconRu/>
                    <strong>RU</strong>
                </span>
                <span className={styles.pushMenu__header_item} onClick={() => visible(false)}><CloseButton/></span>
            </div>
            <div className={styles.pushMenu__body}>
                <div className={styles.pushMenu__backSection}>
                    { !isFirstNode && <button className={styles.pushMenu__buttonBack} onClick={() => { setUUIDPath(uuidPath.split(UUID_SEPARATOR).slice(0, -1).join(UUID_SEPARATOR)) }}>
                        <ArrowLeft/>
                        {uuidPath.split(UUID_SEPARATOR)[uuidPath.split(UUID_SEPARATOR).length-1]}
                    </button> }
                </div>
                { isMounted && <ul>
                    { paths.map(currentUUID => {
                        const incrementedUUIDPath = uuidPath + (isFirstNode ? '' : UUID_SEPARATOR) + currentUUID
                        const pathLabel = translateMessage(language, getUUIDAllias(currentUUID))
                        return <li key={incrementedUUIDPath}>
                            <button className={styles.pushMenu__buttonPush} onClick={() => { setUUIDPath(incrementedUUIDPath) }}>
                                <strong>{pathLabel}</strong>
                                <ArrowRight/>
                            </button>
                        </li>
                    }) }
                </ul> }
            </div>

        </div>
    );
};

export default PushMenu