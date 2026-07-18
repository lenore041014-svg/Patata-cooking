console.log(window.location);
console.log(window.location.href);
console.log(window.location.search);
const recipeDetail =
document.getElementById("recipe-detail");
const params = new URLSearchParams(window.location.search);
console.log(params.get("id"));
const recipeId = Number(params.get("id"));
console.log(recipeId);



fetch("data/recipes.json")
.then(function(response){

    return response.json();

})
.then(function(recipes){
    for(let i=0;i<recipes.length;i++)
        if (recipes[i].id === recipeId) 
            {let ingredientsHTML = "";
             let stepsHTML = "";
             let tipsHTML = "";
                for(let j=0; j<recipes[i].ingredients.length; j++)
                {ingredientsHTML += `
                <li>${recipes[i].ingredients[j]}</li>
`;}
                for(let k=0; k<recipes[i].steps.length; k++)
                {stepsHTML += `
                <li>${recipes[i].steps[k]}</li>
`;}
                for(let m=0; m<recipes[i].tips.length; m++)
                {tipsHTML += `
                <li>${recipes[i].tips[m]}</li>
`;}
console.log(ingredientsHTML);
console.log(stepsHTML);
console.log(tipsHTML);

recipeDetail.innerHTML = `
<div><h1>${recipes[i].name_cn}</h1>
<p>${recipes[i].name_it}</p>
<img src="${recipes[i].image}">
<h2>Ingredients</h2>
<ul>${ingredientsHTML}</ul>
<h2>Steps</h2>
<ul>${stepsHTML}</ul>
<h2>Tips</h2>
<ul>${tipsHTML}</ul>
</div>
`;
             }
    }
);
