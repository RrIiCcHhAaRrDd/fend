const updateUIfn = async () => {
    const response = await fetch('/getObject')
    console.log("getDataFn requested")
    try {
        const allData = await response.json();
        const APIresponse = allData[0][0];
        console.log("this is updateUI " + allData)
        document.getElementById('text').innerHTML = '"' + APIresponse.text + '"';
        document.getElementById('subjectivity').innerHTML = APIresponse.subjectivity;
        document.getElementById('polarity').innerHTML = APIresponse.score_tag;

        Client.polarity(APIresponse.score_tag);
    }
    catch (error) {
        console.log("update UI function did not work", error);
    }
}

export { updateUIfn }

