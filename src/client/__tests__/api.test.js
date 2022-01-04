import {analyseUrl} from "../api";

test('analyseUrl is defined', () => {
    expect(analyseUrl).toBeDefined();
})

test('should return response has status with code 0', () => {
    return analyseUrl('https://google.com').then((result) => {
        expect(result.status.code).toEqual('0');
    });
});

test('should return status code 200 with messing required parameters', () => {
    return analyseUrl('').then((result) => {
        expect(result.status.code).toEqual('200');
    });
});
