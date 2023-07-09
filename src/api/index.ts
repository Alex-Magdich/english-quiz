
const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getInformationAboutWord = async (word: string) => {
    const request = await fetch(`${API_URL}/${word}`);

    return request.json();
};
