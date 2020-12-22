import i18n from '../i18n';

const translateFn = (key:string) => i18n.t(key); // Contextprovider does not work at the moment as they have an error there

const getTranslation = (key:string) => translateFn(key);

export default getTranslation;
