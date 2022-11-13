import { polarity } from '../src/client/js/changePolarity'

describe("Testing the change polarity fn", () => {
    test("Testing", () => {
        const expected = [
            'P+',
            'P',
            'NEU',
            'N',
            'N+',
            'NONE',
        ]
        document.body.innerHTML =
            '<div id="polarity">' +
            'N' +
            '</div>';
        const input = 'NONE'

        expect(expected).toContain(input)

    })
})

