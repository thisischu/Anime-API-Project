const apiKey = "8y8gBKAXXsuUMrruqL7f97BNxOCLMKRzLhm1VAnx"

const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


const check = async () => {
    console.log("check")
    try {
        //fetch API
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log(data)
        
        //Get content 
        const date = data.date;
        const explanation = data.explanation;
        const imageURL = data.url;
        const titleDescrition = data.title;

        //Get element 
        const dateElement = document.getElementById("date");
        const picture = document.getElementById("imgOfTheDay");
        const title = document.getElementById("title");
        const descrition = document.getElementById("description");

        //Clear content
        dateElement.textContent = "";
        picture.src = "";
        title.textContent = "";
        descrition.textContent = "";

        //set content
        dateElement.textContent = date;
        picture.src = imageURL;
        title.textContent = titleDescrition;
        descrition.textContent = explanation;

        //Style

        picture.style.width = "280px";

    } catch (err) {
        console.log('Error', err)
    }
}

check()