import { ILanguage } from "./ILanguage"

export type ITranslatedMessage = {
    [lang in ILanguage]: string
}