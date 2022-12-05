const getAPIfn = async () => {
    const url1 = "/new"
    const res1 = await fetch(url1)
    const data1 = await res1.text()
    console.log(data1)

    const key = data1

    const form = document.querySelector('form');
    const formData = new FormData(form);

    let quote =Array.from(formData)[1][1];
    let website =Array.from(formData)[1][1];

    function removeHttp(url) {
        return url.replace(/^https?:\/\//, '');
    }

    function input() {
        if (document.getElementById('urlRadio').checked === true) {
            return "&url=" + removeHttp(website)
        }
        else
            return "&txt=" + quote
    }

    console.log(`https://api.meaningcloud.com/sentiment-2.1&key=${key}${input()}&lang=auto`)


    const res2 = await fetch(`https://api.meaningcloud.com/sentiment-2.1&key=${key}${input()}&lang=auto`)

    console.log("getAPIfn requested")

    try {
        const data2 = await res2.json();
        console.log(data2)
        
        Client.postData('/addObject', { quote: data2.sentence_list[0].text, score_tag: data2.score_tag, subjectivity: data2.subjectivity })
    }
    catch (error) {
        console.log('error', error);
        alert("Error inputting data in Text fields: please check input and try again");
    }
}

export { getAPIfn }
