import { ERROR_UUID, uuidDictionary } from "../constants"
import { LocalizedText } from "../../../shared";

export const getUUIDAllias = (uuid: string) => {
    if (!uuid) return uuidDictionary[ERROR_UUID]
    if (!uuidDictionary[uuid]) return new LocalizedText(uuid, uuid)
    return uuidDictionary[uuid]
}