export class LocalizedText {
    ru: string
    en: string = ''
    constructor(ru: string, en: string = '') {
        this.ru = ru
        this.en = en
    }
}

