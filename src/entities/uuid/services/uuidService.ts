import { INavNode } from "../types"
import { MAIN_UUID, UUID_SEPARATOR } from "../constants"

export class UuidService {
    private _separator = UUID_SEPARATOR
    private readonly _foolishPath: string
    private readonly _path: string[]


    constructor(uuidPath: string) {
        this._foolishPath = uuidPath
        this._path = uuidPath.split(this._separator)
    }

    getLastUUID = () => {
        if (this._foolishPath === '') return MAIN_UUID
        return this._path[this._path.length - 1]
    }

    getFullUUID = () => {
        return this._path.join(this._separator)
    }

    getUUIDPaths = (navNode: INavNode): string[] => {
        if (this._foolishPath === '') return Object.keys(navNode)

        let currentPathNode: INavNode | null = navNode
        this._path.forEach(currentPath => {
            if (currentPathNode && currentPathNode[currentPath] !== null) {
                currentPathNode = currentPathNode[currentPath]
            } else {
                currentPathNode = {}
            }
        })

        return Object.keys(currentPathNode)
    }
}