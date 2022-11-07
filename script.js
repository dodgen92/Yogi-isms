async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '372211e2bcmshe1d9fdb67c02279p17f4a0jsn401f1acc8f64',
            'X-RapidAPI-Host': 'yogia-berra-quotes.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://yogia-berra-quotes.p.rapidapi.com/random', options)
    const record = await res.json()
///
///    console.log('record' , record)
    document.getElementById("quotes").innerHTML = JSON.stringify(record.text);
}

fetchData();
