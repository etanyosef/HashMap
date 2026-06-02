import { HashMap } from "./hash-map";


describe('Hash Map', () => {
    const hashMap = new HashMap();

    hashMap.set('sagi', 'cat');
    
    jest.spyOn(hashMap, 'get');
    jest.spyOn(hashMap, 'has');

    it('Test get', () => {
        expect(hashMap.get('sagi').toBe('cat'));
    })
});