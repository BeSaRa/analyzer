import {isValidURL} from "../isValidURL";

test('isValidate URL defined ', () => {
    expect(isValidURL).toBeDefined();
})

test('return true for valid URL', () => {
    expect(isValidURL('https://google.com')).toBeTruthy();
});

test('return false for valid URL', () => {
    expect(isValidURL('ddd')).toBeFalsy();
});
