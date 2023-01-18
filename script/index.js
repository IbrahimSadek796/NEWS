// //API
var titleNews = document.getElementById(`titleNews`)
var myCountry = document.querySelectorAll(`.containers li`)
var myCategories = document.querySelectorAll(`.navbar li`);
var option;
var countrySrc;
var items;
var categorySrc;


for(var i=0;i<myCountry.length;i++){
    myCountry[i].addEventListener(`click`,function(e){
        countrySrc=e.target.getAttribute(`country`)
        getAPI(countrySrc,`general`)
    })
}

for(var i=0;i<myCategories.length;i++){
    myCategories[i].addEventListener(`click`,function(e){
        categorySrc=e.target.getAttribute(`category`)
        getAPI(countrySrc,categorySrc)
    })
}


async function getAPI(countrySrc , categorySrc){
    var result = await fetch(`https://newsapi.org/v2/top-headlines?country=${countrySrc}&category=${categorySrc}&apiKey=ded52c1dc95a445494d1c73c6d12074a`);
    var finalResultC = await result.json();
    option = finalResultC.articles;
    display()
}

getAPI(`eg` , `general`)


// display

function display(){
    var container=``;
    var contain=``;
    for(var i=0;i<option.length;i++){
        if(option[i].description !==null && option[i].urlToImage !==null){
                container+=`<div class="col-md-4 py-2">
                <div class="responses shadow rounded position-relative  bg-light overflow-hidden">
                    <img class="w-100" src="${option[i].urlToImage}" alt="">
                
                    <div class ="caption text-center p-1">
                        <h3>${option[i].title.split(' ').splice(0,4).join(' ')}</h3>
                        <P>${option[i].description.split(' ').splice(0,10).join(' ')}</P>
                        <a href="${option[i].url}" class='btn btn-outline-info'>Show Information</a>
                    </div>
                </div>
            </div>`
            contain+=`${option[i].title}  `
            
            
           
        }
        
    }
    
    document.getElementById(`title`).innerHTML=contain;
    document.getElementById('showDate').innerHTML=container;
}



$(document).ready(function(){
    $('.loading i').fadeOut(5000, function(){
        $('.loading').slideUp(5000, function(){
            $('.loading').remove()
            $('body').css('overflow-y','auto')
            
        })
    })
})