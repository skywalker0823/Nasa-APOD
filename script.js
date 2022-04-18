main=document.getElementById("main")



window.addEventListener("load",()=>{
    console.log("loha")
    get_data()
})

get_data=async()=>{
    const options = {
      method: "GET",
    };
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?count=15&api_key=1SaK1x6i7niSWhPgNVm193z0ezf0mu006NhRlF7w",
      options
    );
    const result = await response.json();
    console.log(result);
    for(a of result){
        box = document.createElement("div");
        title_box = document.createElement("div");
        date_box = document.createElement("div");
        img_box = document.createElement("img");
        exp_box = document.createElement("div");

        //設定box
        box.setAttribute("class","box")

        //title
        title_box.setAttribute("class", "title_box");
        title_box.appendChild(document.createTextNode(a.title));
        box.appendChild(title_box)

        //date
        date_box.setAttribute("class","date_box");
        date_box.appendChild(document.createTextNode(a.date));
        box.appendChild(date_box)

        //img
        img_box.setAttribute("class","img_box")
        img_box.setAttribute("src",a.url)
        box.appendChild(img_box)

        //exp
        exp_box.setAttribute("class","exp_box");
        exp_box.appendChild(document.createTextNode(a.explanation))
        box.appendChild(exp_box)
        

        //last
        main.appendChild(box)

    }
}
