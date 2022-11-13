function polarity(score) {
  console.log("running polarity")
  
  if (score === "P+") {
    document.getElementById('polarity').innerHTML = "Strong Positive";
  }
  else if (score === "P") {
    document.getElementById('polarity').innerHTML = "Positive";
  }
  else if (score === "NEU") {
    document.getElementById('polarity').innerHTML = "Neutral"
  }
  else if (score === "N") {
    document.getElementById('polarity').innerHTML = "Negative";
  }
  else if (score === "N+") {
    document.getElementById('polarity').innerHTML = "Strong Negative"
  }
  else if (score === "NONE") {
    document.getElementById('polarity').innerHTML = "Without Polarity"
  }
  else{
    alert("No object was received from API")
  }

}


export { polarity }