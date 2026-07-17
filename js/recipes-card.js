const recipeList = document.getElementById("recipe-list");
const recipes = [
    {   id: 1,
        category: "chinese",

        name_cn: "辣椒炒肉",
        name_it: "Maiale saltato in padella con peperoni piccanti",

        image: "images/la-jiao-chao-rou.jpeg"
    },

    {   id: 2,
        category: "chinese",

        name_cn: "酸辣海茸",
        name_it: "Alghe marine croccanti in salsa agropiccante",

        image: "images/suan-la-hai-rong.jpeg"
    },

    {   id: 3,
        category: "chinese",

        name_cn: "鸡丝凉面",
        name_it: "Noodles freddi con pollo sfilacciato",

        image: "images/ji-si-liang-mian.jpeg"
    }
];
for(let i=0;i<recipes.length;i++)
{
recipeList.innerHTML +=`
<a href="recipe.html?id=${recipes[i].id}">
<div class="recipe-card">
<img src="${recipes[i].image}">
<h2>${recipes[i].name_cn}</h2>
<p>${recipes[i].name_it}</p>
</div>
</a>
`;
}
