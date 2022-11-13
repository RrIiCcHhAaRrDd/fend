import { updateUIfn } from '../src/client/js/updateUI'


describe("testing the updateUIfn", () => {
    test("testing html elements if defined", () => {
       const object = {text: "sample text", subjectivity: "OBJECTIVITY", score_tag: "N"}

       global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(response.json)
            }))

      const textElement =  '<div id="text"></div>'
      const subjectivityElement = '<div id="subjectivity"></div>';
      const polarityElement = ' <div id="polarity"></div>'

      expect(updateUIfn(object)).toBeDefined();
    })

})

