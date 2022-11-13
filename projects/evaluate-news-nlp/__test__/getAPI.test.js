import { getAPIfn } from '../src/client/js/getAPI'
import { postData } from '../src/client/js/postRequest'

describe("testing getAPI fn", () => {
    test("Testing if getAPIfn receives correct data", () => {

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(response.json)
            }))

        expect(getAPIfn).toBeDefined(); 

        const Object = { test: "any text" }
        expect(postData("/addObject", { Object })).toBeDefined();
    })
})