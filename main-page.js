document.getElementById('search-button').addEventListener('click', function() {
    var searchQuery = document.getElementById('search-input').value;
    // Perform search operation with the searchQuery
    console.log("Performing search for: " + searchQuery);
  });
  document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    // ذخیره وضعیت تم در کوکی یا مکانیزم دیگر
    // ...

    // انجام سایر تغییرات مرتبط با تغییر تم
    // ...
  }
  document.getElementById('filter-btn').addEventListener('click', function() {
    var productName = document.getElementById('product-filter').value.toLowerCase();
    var maxPrice = document.getElementById('price-filter').value;
    
    var products = document.getElementsByClassName('product');
    
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var name = product.getAttribute('data-name').toLowerCase();
      var price = parseInt(product.getAttribute('data-price'));
      
      var nameMatch = name.includes(productName);
      var priceMatch = isNaN(maxPrice) || price <= maxPrice;
      
      if (nameMatch && priceMatch) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });
  "use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}