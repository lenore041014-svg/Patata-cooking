const currentCategory = document.body.dataset.category;

console.log(currentCategory);
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
    },
    {   id: 4,
        category: "italian",

        name_cn: "意大利肉丸",
        name_it: "Polpette al sugo",

        image: "images/Polpette-al-sugo.jpeg"
    },
    {   id: 5,
        category: "italian",

        name_cn: "热那亚佛卡夏",
        name_it: "Focaccia alla Genovese",

        image: "images/Focaccia-alla-Genovese.jpeg"
    },
    {   id: 6,
        category: "chinese",

        name_cn: "蒸饺",
        name_it: "Ravioli cinesi al vapore",

        image: "images/zheng-jiao.jpeg"
    },
    {   id: 7,
        category: "italian",

        name_cn: "牛油果酱",
        name_it: "Guacamole",

        image: "images/Guacamole.jpeg"
    },
    {   id: 8,
        category: "chinese",

        name_cn: "春卷",
        name_it: "Involtini primavera",

        image: "images/chun-juan.jpeg"
    },
    {   id: 9,
        category: "italian",

        name_cn: "安达卢西亚冷汤",
        name_it: "Gazpacho Andaluso",

        image: "images/Gazpacho-Andaluso.jpeg"
    },
    {   id: 10,
        category: "chinese",

        name_cn: "西葫芦鸡蛋饼",
        name_it: "Frittata di Zucchine",

        image: "images/xi-hu-lu-ji-dan-bing.jpeg"
    },
    {   id: 11,
        category: "italian",

        name_cn: "罗马涅薄饼",
        name_it: "Piadina Romagnola",

        image: "images/Piadina-Romagnola.jpeg"
    },
    {   id: 12,
        category: "chinese",

        name_cn: "油炸南瓜花",
        name_it: "Fiori di Zucca in Pastella",

        image: "images/you-zha-nan-gua-hua.jpeg"
    }
];

for (let i = 0; i < recipes.length; i++) {

    if (recipes[i].category === currentCategory.toLowerCase()) {

        recipeList.innerHTML += `
        <a href="recipe.html?id=${recipes[i].id}">
            <div class="recipe-card">
                <img src="${recipes[i].image}">
                <h2>${recipes[i].name_cn}</h2>
                <p>${recipes[i].name_it}</p>
            </div>
        </a>
        `;
    }

}
