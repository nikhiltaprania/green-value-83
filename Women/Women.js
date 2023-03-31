const product = [
    {
        id: 1,
        category: "dress",
        description: "Liquorish a line midi lace dress in navy",
        price: 26.00,
        image: "https://images.asos-media.com/products/liquorish-a-line-midi-lace-dress-in-navy/201829887-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 2,
        category: "dress",
        description: "COLLUSION t-shirt with printed logo in beige",
        price: 17.90,
        image: "https://images.asos-media.com/products/collusion-t-shirt-with-printed-logo-in-beige/204140306-2?$n_480w$&wid=476&fit=constrain",
    },
    {
        id: 3,
        category: "dress",
        description: "ASOS DESIGN petite high neck dobby embroidered mini dress with lace trims",
        price: 34.00,
        image: "https://images.asos-media.com/products/asos-design-petite-high-neck-dobby-embroidered-mini-dress-with-lace-trims-in-sage-green/202305936-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 4,
        category: "top",
        description: "ASOS DESIGN oversized shirt with utility pocket in cream",
        price: 15.00,
        image: "https://images.asos-media.com/products/asos-design-oversized-shirt-with-utility-pockets-in-cream/202477684-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 5,
        category: "top",
        description: "VA121 cropped tennis zip polo top coord in cream",
        price: 6.50,
        image: "https://images.asos-media.com/products/vai21-cropped-tennis-zip-polo-top-co-ord-in-cream/201987670-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 6,
        category: "jeans",
        description: "Bolongaro Trevor dakota skinny fit jeans in black",
        price: 24.50,
        image: "https://images.asos-media.com/products/bolongaro-trevor-dakota-skinny-fit-jeans-in-black/202894494-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 7,
        category: "dress",
        description: "ASOS DESIGN square neck belted pleated maxi dress in rose - PINK",
        price: 25.50,
        image: "https://images.asos-media.com/products/asos-design-square-neck-belted-pleated-maxi-dress-in-rose-pink/202952101-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 8,
        category: "top",
        description: "ASOS DESIGN tee blouse in mixed jacquard with lace trim",
        price: 11.50,
        image: "https://images.asos-media.com/products/asos-design-tee-blouse-in-mixed-jacquard-with-lace-trim/202608938-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 9,
        category: "jeans",
        description: "ASOS DESIGN Tall relaxed mom jeans in light blue",
        price: 10.50,
        image: "https://images.asos-media.com/products/asos-design-tall-relaxed-mom-jeans-in-light-blue/20859638-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 10,
        category: "sneakers",
        description: "Puma Mayze Stack traners in white and oatmeal",
        price: 63.00,
        image: "https://images.asos-media.com/products/puma-mayze-stack-trainers-in-white-and-oatmeal/203445370-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 11,
        category: "sneakers",
        description: "Puma Mayze Stack trainers in white and black",
        price: 63.00,
        image: "https://images.asos-media.com/products/puma-mayze-stack-trainers-in-white-and-black/203446099-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 12,
        category: "dress",
        description: "Parallel Lines halterneck cut out satin midi dress in black",
        price: 13,
        image: "https://images.asos-media.com/products/parallel-lines-halterneck-cut-out-satin-midi-dress-in-black/203455230-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 13,
        category: "top",
        description: "ASOS DESIGN halter neck crop top in yellow",
        price: 5.00,
        image: "https://images.asos-media.com/products/asos-design-halter-neck-crop-top-in-yellow/202363821-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 14,
        category: "sneakers",
        description: "London Rebel minimal lace up traners in white with black",
        price: 25.20,
        image: "https://images.asos-media.com/products/asos-design-daze-multi-lace-skater-trainers-in-pastel-mix/202291593-2?$n_320w$&wid=317&fit=constrain",
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
        description: "Bershka boggy jeans",
        price: 49.90,
        image: "https://images.asos-media.com/products/the-ragged-priest-wide-leg-dad-jeans-in-green-paisley-print/202641019-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 17,
        category: "dress",
        description: "Lipsy halterneck bodycon midi dress in black",
        price: 28.00,
        image: "https://images.asos-media.com/products/lipsy-halterneck-bodycon-midi-dress-in-black/21703539-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 18,
        category: "dress",
        description: "Forever New flippy hem mini tea dress in peach ditsy floral",
        price: 63.00,
        image: "https://images.asos-media.com/products/forever-new-flippy-hem-mini-tea-dress-in-peach-ditsy-floral/202033921-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 19,
        category: "dress",
        description: "Topshop sleeve mesh ruched blurred floral mini dress in blue",
        price: 26.50,
        image: "https://images.asos-media.com/products/topshop-long-sleeve-mesh-ruched-blurred-floral-mini-dress-in-blue/203320429-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 20,
        category: "top",
        description: "ASOS DESIGN sheer floral jacquard cowl neck top with fauz feather trim",
        price: 38.50,
        image: "https://images.asos-media.com/products/asos-design-sheer-floral-jacquard-cowl-neck-top-with-faux-feather-trim-sleeves-in-purple/202636095-2?$n_320w$&wid=317&fit=constrain",
    },
    {
        id: 21,
        category: "sneakers",
        description: "ASOS DESIGN Dian chunky skater trainers in tan",
        price: 18.00,
        image: "https://images.asos-media.com/products/asos-design-dion-chunky-skater-trainers-in-tan/202258264-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 22,
        category: "dress",
        description: "Bologaro Trvor long sleeve crepe shirt in white",
        price: 26.00,
        image: "https://images.asos-media.com/products/bolongaro-trevor-long-sleeve-crepe-shirt-in-white/202202626-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 23,
        category: "dress",
        description: "ASOS DESIGN belted batwing maxi tea dress in white and gold metallic",
        price: 57.00,
        image: "https://images.asos-media.com/products/asos-design-belted-batwing-maxi-tea-dress-in-white-and-gold-metallic-jacquard/202291673-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 24,
        category: "top",
        description: "ASOS DESIGN capped sleeve shirt in crinkled satin in light blue",
        price: 12.00,
        image: "https://images.asos-media.com/products/asos-design-capped-sleeve-shirt-in-crinkled-satin-in-light-blue/202477704-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 25,
        category: "jeans",
        description: "Daisy Street Y2K relaxed fit trousers in text graphic print",
        price: 12.00,
        image: "https://images.asos-media.com/products/daisy-street-y2k-relaxed-fit-trousers-in-text-graphic-print/201836206-1-multi?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 26,
        category: "sneakers",
        description: "Puma Teveris Nitro trainers in grey",
        price: 59.00,
        image: "https://images.asos-media.com/products/puma-teveris-nitro-trainers-in-grey/203445728-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 27,
        category: "dress",
        description: "PUMA Downtown checkerboard shirt in pale blue in white",
        price: 36.00,
        image: "https://images.asos-media.com/products/puma-downtown-checkerboard-shirt-in-pale-blue-in-white/201849162-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 28,
        category: "top",
        description: "JJXX dipped hem shirt in lilac check",
        price: 17.00,
        image: "https://images.asos-media.com/products/jjxx-dipped-hem-shirt-in-lilac-check/202700517-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 29,
        category: "jeans",
        description: "Urban Bliss co-ord patchwork wide leg jeans in neutral",
        price: 27.50,
        image: "https://images.asos-media.com/products/urban-bliss-co-ord-patchwork-wide-leg-jeans-in-neutral/201538759-1-pink?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 30,
        category: "sneakers",
        description: "Puma Cali Dream chucky trainers in pastel",
        price: 56.00,
        image: "https://images.asos-media.com/products/puma-cali-dream-chunky-trainers-in-pastel/201437056-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 31,
        category: "dress",
        description: "Sister Jane mini babydoll dress in pink floral jacquard with bow",
        price: 31.50,
        image: "https://images.asos-media.com/products/sister-jane-mini-babydoll-dress-in-pink-floral-jacquard-with-bow/203290791-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 32,
        category: "top",
        description: "Umbro co-ord crossover hem cropped vest in teal",
        price: 8.10,
        image: "https://images.asos-media.com/products/umbro-co-ord-crossover-hem-cropped-vest-in-teal/201073266-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 33,
        category: "jeans",
        description: "NA-KD swirl pattern jeans in blue",
        price: 26.40,
        image: "https://images.asos-media.com/products/na-kd-swirl-pattern-jeans-in-blue/202117764-1-blue?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 34,
        category: "sneakers",
        description: "adidas Running Ultraboost 22 trainers in black and pink",
        price: 99.00,
        image: "https://images.asos-media.com/products/adidas-running-ultraboost-22-trainers-in-black-and-pink/201442828-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 35,
        category: "suit",
        description: "ASOS DESIGN lace insert pleated midi dress with embroidery in white",
        price: 43.00,
        image: "https://images.asos-media.com/products/asos-design-lace-insert-pleated-midi-dress-with-embroidery-in-white/202493001-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 36,
        category: "top",
        description: "adidas Originals resort cropped polo t-shirt in navy",
        price: 16.50,
        image: "https://images.asos-media.com/products/adidas-originals-resort-cropped-polo-t-shirt-in-navy/202212178-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 37,
        category: "jeans",
        description: "Cotton On straght leg jeans in green checkerboard",
        price: 23.00,
        image: "https://images.asos-media.com/products/cottonon-straight-leg-jeans-in-green-checkerboard/202508079-1-greencheckerboard?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 38,
        category: "sneakers",
        description: "adidas Originals Ozelia trainers in triple white",
        price: 54.00,
        image: "https://images.asos-media.com/products/adidas-originals-ozelia-trainers-in-triple-white/200972722-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 39,
        category: "dress",
        description: "Closet London pleated high low midaxi dress in green",
        price: 39.50,
        image: "https://images.asos-media.com/products/closet-london-pleated-high-low-midaxi-dress-in-green/202909024-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 40,
        category: "top",
        description: "Topshop long sleeve mesh seam detail top in ecru",
        price: 13.00,
        image: "https://images.asos-media.com/products/topshop-long-sleeve-mesh-seam-detail-top-in-ecru/203009270-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 41,
        category: "jeans",
        description: "Stradivarius Tall minimal wide leg cropped jean in light wash",
        price: 15.50,
        image: "https://images.asos-media.com/products/stradivarius-tall-minimal-wide-leg-cropped-jean-in-light-wash/203061511-1-lightblue?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 42,
        category: "sneakers",
        description: "adidas Originals Retropy E5 trainers in white lilac details",
        price: 66.50,
        image: "https://images.asos-media.com/products/adidas-originals-retropy-e5-trainers-in-white-with-lilac-details/202275007-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 43,
        category: "dress",
        description: "Pieces Petite quilted midi dress in black",
        price: 18.00,
        image: "https://images.asos-media.com/products/pieces-petite-velour-quilted-midi-dress-in-black/201333899-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 44,
        category: "top",
        description: "Fred Perrry oversized woven shirt in ecru",
        price: 85.00,
        image: "https://images.asos-media.com/products/fred-perry-oversized-woven-shirt-in-ecru/202455781-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 45,
        category: "jeans",
        description: "Stradivarius contrast two tone mom jean in ecru",
        price: 11.50,
        image: "https://images.asos-media.com/products/stradivarius-contrast-two-tone-mom-jean-in-ecru/200549009-1-ecru?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 46,
        category: "sneakers",
        description: "adidas Running Ultraboost 22 Cold Ready II trainers in blue",
        price: 102.00,
        image: "https://images.asos-media.com/products/adidas-running-ultraboost-22-coldready-ii-trainers-in-blue/202740329-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 47,
        category: "dress",
        description: "ASOS DESIGN pleated wrap front midi dress in yellow floral",
        price: 25.00,
        image: "https://images.asos-media.com/products/asos-design-tall-puff-sleeve-lace-trim-pleated-skater-dress-in-bright-red/202285523-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 48,
        category: "top",
        description: "COLLUSION lettuce edge one shoulder top in black",
        price: 3.59,
        image: "https://images.asos-media.com/products/collusion-lettuce-edge-one-shoulder-top-in-black/201752915-2?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 49,
        category: "jeans",
        description: "River Island Kaia high waisted skinny jean in medium blue",
        price: 26.00,
        image: "https://images.asos-media.com/products/river-island-kaia-high-waisted-skinny-jean-in-medium-blue/203578470-1-denimmedium?$n_320w$&wid=317&fit=constrain"
    },
    {
        id: 50,
        category: "sneakers",
        description: "adidas Originals ZX 22 Boost trainers in off white and yellow",
        price: 67.50,
        image: "https://images.asos-media.com/products/adidas-originals-zx-22-boost-trainers-in-off-white-and-yellow/201456217-2?$n_320w$&wid=317&fit=constrain"
    }
];
const main = document.getElementById("main");
showData(product);
const WomenCart = JSON.parse(localStorage.getItem("WomenCart")) || [];


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
                WomenCart.push({ ...el, quantity: 1 });
                localStorage.setItem("WomenCart", JSON.stringify(WomenCart));
            }
        })


        image.setAttribute("src", el.image);
        description.innerText = el.description;
        category.innerText = "Category: " + el.category;
        price.innerText = "Price: $" + el.price;
        add.innerText = "BUY NOW";

        card.append(image, category, description, price, add);
        main.append(card);
    })

    function checkAvailability(element) {
        for (let i = 0; i < WomenCart.length; ++i) {
            if (element.id === WomenCart[i].id) {
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
})

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
})

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
})