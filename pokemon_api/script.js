// function fetchInfo(){
//     console.log("Get API INFO");

//     var response = await fetch("API INPUT")
//     var data = await response.json();
//     console.log(data);
// }


function fetchInfo(){
    var input = document.querySelector("#input");
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            var image = document.querySelector("#pokemonImage")
            image.src = res.sprites.front_default;
        })
        .catch(err=>{
            console.log(err);
            alert("Something went wrong");
        })

}