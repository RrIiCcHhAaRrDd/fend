import { response } from 'express';
import { postData } from '../src/client/js/postRequest'

describe("testing post data fn", () => {
    test("Testing if post request returns object", () => {

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(response.json)
            }))

        const Object = { test: "any text" }
        expect(postData("/addObject", { Object })).toBeDefined();
    })
})