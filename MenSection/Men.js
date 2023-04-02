const product = [
    {
        id: 1,
        category: "pants",
        description: "COLLUSION puddle smart tailored pants in charcoal",
        price: 48.90,
        image: "https://images.asos-media.com/products/collusion-puddle-smart-tailored-pants-in-charcoal/204224038-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 2,
        category: "shirt",
        description: "COLLUSION t-shirt with printed logo in beige",
        price: 17.90,
        image: "https://images.asos-media.com/products/collusion-t-shirt-with-printed-logo-in-beige/204140306-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 3,
        category: "shirt",
        description: "COLLUSION ribbed tank top in white",
        price: 22.90,
        image: "https://images.asos-media.com/products/collusion-ribbed-tank-top-in-white/204140295-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 4,
        category: "shorts",
        description: "COLLUSION textured boggy skater shorts in stone plaid - part of a set",
        price: 39.90,
        image: "https://images.asos-media.com/products/collusion-textured-baggy-skater-shorts-in-stone-plaid-part-of-a-set/204106458-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 5,
        category: "shorts",
        description: "SilkSilk Swim Shorts In Black",
        price: 46.00,
        image: "https://images.asos-media.com/products/siksilk-swim-shorts-in-black/23846003-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 6,
        category: "jeans",
        description: "ASOS DESIGN skinny jeans in Y2k heavy tinted mid wash blue",
        price: 50.00,
        image: "https://images.asos-media.com/products/asos-design-skinny-jeans-in-y2k-heavy-tinted-mid-wash-blue/204461132-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 7,
        category: "shirts",
        description: "Jack & Jones Originals floral revere collar shorts sleeve shirt in while",
        price: 39,
        image: "https://images.asos-media.com/products/jack-jones-originals-floral-revere-collar-short-sleeve-shirt-in-white/203943830-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 8,
        category: "shorts",
        description: "Vans vintage checkered board shorts in black and white",
        price: 65.00,
        image: "https://images.asos-media.com/products/vans-vintage-checkered-board-shorts-in-black-and-white/204702360-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 9,
        category: "jeans",
        description: "New Balance Essentials embroidered sweatpants in black",
        price: 65.00,
        image: "https://images.asos-media.com/products/new-balance-essentials-embroidered-sweatpants-in-black/204545814-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 10,
        category: "sneakers",
        description: "Adidas Original Gozelle sneakers in navy",
        price: 100.00,
        image: "https://images.asos-media.com/products/adidas-originals-gazelle-sneakers-in-navy/204504625-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 11,
        category: "sneakers",
        description: "Reebok BB 4000 II sneakers in white with black detail",
        price: 90.00,
        image: "https://images.asos-media.com/products/reebok-bb-4000-ii-sneakers-in-white-with-black-detail/203051671-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 12,
        category: "shirt",
        description: "ASOS DESIGN longline oversized satin shirt black",
        price: 36,
        image: "https://images.asos-media.com/products/asos-design-longline-oversized-satin-shirt-black/204296232-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 13,
        category: "shorts",
        description: "ASOS DESIGN swim shorts in short length in leopard print in green",
        price: 26.00,
        image: "https://images.asos-media.com/products/asos-design-swim-shorts-in-short-length-in-leopard-print-in-green/204188310-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 14,
        category: "sneakers",
        description: "Nike Air Max 90 sneakers in ivary and red",
        price: 140.00,
        image: "https://images.asos-media.com/products/nike-air-max-90-sneakers-in-ivory-and-red/203494793-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 15,
        category: "jeans",
        description: "Bershka wide leg contrast stitch jean in black",
        price: 49.90,
        image: "https://images.asos-media.com/products/bershka-wide-leg-contrast-stitch-jean-in-black/204778710-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 16,
        category: "jeans",
        description: "Bershka boggy jeans in black",
        price: 49.90,
        image: "https://images.asos-media.com/products/bershka-baggy-jeans-in-black/204290296-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 17,
        category: "shirt",
        description: "Bershka relaxed shirt in yellow floral print",
        price: 39.90,
        image: "https://images.asos-media.com/products/bershka-relaxed-shirt-in-yellow-floral-print/203129248-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 18,
        category: "pants",
        description: "Topman tapered pintuck sweatpants in black",
        price: 55.00,
        image: "https://images.asos-media.com/products/topman-tapered-pintuck-sweatpants-in-black/204196888-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 19,
        category: "pants",
        description: "Topman tapered pintuck sweatpants in ecru",
        price: 55.00,
        image: "https://images.asos-media.com/products/topman-tapered-pintuck-sweatpants-in-ecru/204196845-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 20,
        category: "shorts",
        description: "BOSS Octopus large side logo swim shorts in light pink",
        price: 96.00,
        image: "https://images.asos-media.com/products/boss-octopus-large-side-logo-swim-shorts-in-light-pink/201043535-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 21,
        category: "sneakers",
        description: "Ben Sherman minimal lace up sneakers in white and green",
        price: 21.50,
        image: "https://images.asos-media.com/products/ben-sherman-minimal-lace-up-sneakers-in-white-and-green/201584032-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 22,
        category: "shirt",
        description: "Bologaro Trvor long sleeve crepe shirt in white",
        price: 26.00,
        image: "https://images.asos-media.com/products/bolongaro-trevor-long-sleeve-crepe-shirt-in-white/202202626-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 23,
        category: "pants",
        description: "French Connection suit pants in stone and white",
        price: 66.00,
        image: "https://images.asos-media.com/products/french-connection-suit-pants-in-stone-and-white/202138260-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 24,
        category: "shorts",
        description: "ASOS DESIGN 2 pack chino cigrette shorts in khaki and charcoal save",
        price: 18.50,
        image: "https://images.asos-media.com/products/asos-design-2-pack-chino-cigarette-shorts-in-khaki-and-charcoal-save/201587858-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 25,
        category: "jeans",
        description: "Tommy Jeans dad fit regular tapered crapped jeans in blue",
        price: 104.50,
        image: "https://images.asos-media.com/products/tommy-jeans-dad-fit-regular-tapered-cropped-jeans-in-blue/202787036-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 26,
        category: "sneakers",
        description: "Puma Mirage Sport sneakers in white and orange",
        price: 65.00,
        image: "https://images.asos-media.com/products/puma-mirage-sport-sneakers-in-white-and-orange/202449906-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 27,
        category: "shirt",
        description: "PUMA Downtown checkerboard shirt in pale blue in white",
        price: 36.00,
        image: "https://images.asos-media.com/products/puma-downtown-checkerboard-shirt-in-pale-blue-in-white/201849162-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 28,
        category: "shorts",
        description: "ASOS DESIGN slim shorts in pink cord",
        price: 25.90,
        image: "https://images.asos-media.com/products/asos-design-slim-shorts-in-pink-cord/201523852-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 29,
        category: "jeans",
        description: "Tommy Jeans austin slim fit jeans in light blue",
        price: 46.50,
        image: "https://images.asos-media.com/products/tommy-jeans-austin-slim-fit-jeans-in-light-blue/200222164-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 30,
        category: "sneakers",
        description: "Puma CA Pro suede sneakers with rubber sole in black",
        price: 60.00,
        image: "https://images.asos-media.com/products/puma-ca-pro-suede-sneakers-with-rubber-sole-in-black/201555179-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 31,
        category: "shirt",
        description: "ASOS DESIgn revere shirt in core black and white stripe",
        price: 20.00,
        image: "https://images.asos-media.com/products/asos-design-revere-shirt-in-core-black-and-white-stripe/202748771-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 32,
        category: "shorts",
        description: "ASOS DESIGN smart slim shorts in black",
        price: 13.00,
        image: "https://images.asos-media.com/products/asos-design-smart-slim-shorts-in-black/23043156-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 33,
        category: "jeans",
        description: "ASOS DESIGN classic rigid jeans in washed black",
        price: 40.00,
        image: "https://images.asos-media.com/products/asos-design-classic-rigid-jeans-in-washed-black/21254093-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 34,
        category: "suit",
        description: "Harry Brown double breasted suit jacket in blue melange",
        price: 124.00,
        image: "https://images.asos-media.com/products/harry-brown-double-breasted-suit-jacket-in-blue-melange/202294539-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 35,
        category: "suit",
        description: "Bologoro Trevor plain super skinny vest in black",
        price: 33.00,
        image: "https://images.asos-media.com/products/bolongaro-trevor-plain-super-skinny-vest-in-black/202067217-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 36,
        category: "suit",
        description: "Topman skinny blazer in gray check",
        price: 58.00,
        image: "https://images.asos-media.com/products/topman-skinny-blazer-in-gray-check/202278646-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 37,
        category: "suit",
        description: "Puma oversized blazer in sprey green",
        price: 23.50,
        image: "https://images.asos-media.com/products/puma-oversized-blazer-in-spray-green/201846135-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 38,
        category: "suit",
        description: "Topman skinny velvet blazer in gold",
        price: 112.00,
        image: "https://images.asos-media.com/products/topman-skinny-velvet-blazer-in-gold/202202851-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 39,
        category: "suit",
        description: "Topman skinny velvet blazer in black",
        price: 112.00,
        image: "https://images.asos-media.com/products/topman-skinny-velvet-blazer-in-black/202202850-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 40,
        category: "suit",
        description: "River Island textured suit jacket in light gray",
        price: 104.30,
        image: "https://images.asos-media.com/products/river-island-textured-suit-jacket-in-light-gray/203228210-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 41,
        category: "suit",
        description: "River Island textured vest in light gray",
        price: 49.50,
        image: "https://images.asos-media.com/products/river-island-textured-vest-in-light-gray/202296543-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 42,
        category: "suit",
        description: "Topman utility smart cargo suit pants in ecru",
        price: 46.50,
        image: "https://images.asos-media.com/products/topman-utility-smart-cargo-suit-pants-in-ecru/201312239-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 43,
        category: "suit",
        description: "Harry Brown tweet suit jacket in navy",
        price: 40.50,
        image: "https://images.asos-media.com/products/harry-brown-tweed-suit-jacket-in-navy/202294693-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 44,
        category: "suit",
        description: "ASOS DESIGN super skinny linen mix suit in blue",
        price: 34.50,
        image: "https://images.asos-media.com/products/asos-design-super-skinny-linen-mix-suit-pants-in-blue/201579132-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 45,
        category: "suit",
        description: "ASOS DESIGN skinny suit pants in beige and brown check",
        price: 30.00,
        image: "https://images.asos-media.com/products/asos-design-skinny-suit-pants-in-beige-and-brown-check/202086791-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 46,
        category: "suit",
        description: "ASOS DESIGN super skinny line mix suit pants in stone",
        price: 27.50,
        image: "https://images.asos-media.com/products/asos-design-super-skinny-linen-mix-suit-pants-in-stone/201224539-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 47,
        category: "suit",
        description: "Topman skinny pants in pink check",
        price: 30.00,
        image: "https://images.asos-media.com/products/topman-skinny-suit-pants-in-pink-check/201311839-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 48,
        category: "suit",
        description: "River Island slim flannel suit in ecru",
        price: 140.25,
        image: "https://images.asos-media.com/groups/river-island-slim-flannel-suit-in-ecru/113681-group-1?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 49,
        category: "suit",
        description: "Topman skinny three-piece suit in gray and navy check",
        price: 108.20,
        image: "https://images.asos-media.com/groups/topman-skinny-three-piece-suit-in-gray-and-navy-check/79315-group-1?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 50,
        category: "suit",
        description: "Topman skinny single breasted suit jacket in gray and navy check",
        price: 67.50,
        image: "https://images.asos-media.com/products/topman-skinny-single-breasted-suit-jacket-in-gray-and-navy-check/201312333-2?$n_320w$&wid=317&fit=constrain"
    }
];

const main = document.getElementById("main");
showData(product);
const cart = JSON.parse(localStorage.getItem("MenCart")) || [];

function showData(data) {
    main.innerHTML = "";
    data.forEach((el) => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        const category = document.createElement("h3");
        const description = document.createElement("p");
        const price = document.createElement("h4");
        const add = document.createElement("button");

        add.addEventListener("click", () => {
            if (checkAvailability(el)) {
                alert("Product is Already Selected");
            } else {
                cart.push({ ...el, quantity: 1 });
                localStorage.setItem("MenCart", JSON.stringify(cart));
            }
        });


        image.setAttribute("src", el.image);
        description.innerText = el.description;
        category.innerText = "Category: " + el.category;
        price.innerText = "Price: $" + el.price;
        add.innerText = "BUY NOW";

        card.append(image, category, description, price, add);
        main.append(card);
    });

    function checkAvailability(element) {
        for (let i = 0; i < cart.length; ++i) {
            if (element.id === cart[i].id) {
                return true;
            }
            return false;
        }
    }
}

const search = document.getElementById("search");
const searchButton = document.querySelector(".nav1 > button");

searchButton.addEventListener("click", () => {
    let filtered = product.filter((el) => {
        if (el.category.toUpperCase().includes(search.value.toUpperCase())) {
            return true;
        } else {
            return false;
        }
    })
    showData(filtered);
});

const select = document.getElementById("filter");
select.addEventListener("change", () => {
    if (select.value === "") {
        showData(product);
    } else {
        let temp = product.filter((el) => {
            return el.category === select.value;
        });
        showData(temp);
    }
});

const low = document.getElementById("low");
const high = document.getElementById("high");
const priceButton = document.querySelector(".nav2 > button");

priceButton.addEventListener("click", () => {
    let temp = product.filter((el) => {
        if (el.price >= low.value && el.price <= high.value) {
            return true;
        } else {
            return false;
        }
    });
    showData(temp);
});