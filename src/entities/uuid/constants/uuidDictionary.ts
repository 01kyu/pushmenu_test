import { ITranslatedMessageDictionary, LocalizedText } from "../../../shared";
import { ERROR_UUID, ERROR_UUID_MESSAGE, MAIN_UUID, MAIN_UUID_MESSAGE } from "./constants";



export const uuidDictionary: ITranslatedMessageDictionary = {
    'user': new LocalizedText('Пользователь', 'User'),
    'profile': new LocalizedText('Профиль', 'Profile'),
    'billing': new LocalizedText('Оплата', 'Billing'),

    // defaults
    [MAIN_UUID]: MAIN_UUID_MESSAGE,
    [ERROR_UUID]: ERROR_UUID_MESSAGE,
}


