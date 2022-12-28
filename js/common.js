
// header
fetch("/layout/header.html")
.then((response) => {
  return response.text();
})
.then((data) => {
  document.querySelector("#header").innerHTML = data;

  const search = document.querySelector(".search");
  search.addEventListener("click", function () {
    this.classList.add("open");
  });

  document.addEventListener('mouseup', function (e){
    var searchInput = $(".search_input");
    if(searchInput.has(e.target).length === 0){
      document.querySelector('.search').classList.remove("open");
      document.querySelector('.mo_search').classList.remove("open");
    }
  });

  document.querySelector(".moham_btn").addEventListener("click", function () {
    document.querySelector(".mo_nav_back").classList.add("mo");
  });

  document.querySelector(".close_btn").addEventListener("click", function () {
    document.querySelector(".mo_nav_back").classList.remove("mo");
  });

  document.querySelector('.mo_search').addEventListener('click', function(){
    this.classList.add('open')
  })
  
  const accordionBtn = document.querySelectorAll('.mo_gnb > li');
  
  for(let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function(e){
      e.stopPropagation();
      if (accordionBtn[i].classList.contains('accordionTitleActive')) {
        accordionBtn[i].classList.remove('accordionTitleActive')
      } else {
        for(let j = 0; j < accordionBtn.length; j++) {
          accordionBtn[j].classList.remove('accordionTitleActive')
        }        
        accordionBtn[i].classList.add('accordionTitleActive')
      }
    })
  }
});

// footer
fetch("/layout/footer.html")
.then((response) => {
  return response.text();
})
.then((data) => {
  document.querySelector("#footer").innerHTML = data;
});