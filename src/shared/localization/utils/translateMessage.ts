import { ILanguage, ITranslatedMessage } from "../types"

export const translateMessage = (lang: ILanguage, msg: ITranslatedMessage) => {
    return msg[lang]
}