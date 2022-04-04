var i = 1;
var borderSayar=0;
var borderSayar1=0;
var darkMode=true;
var regionShower=false;
var firstFetch="https://restcountries.com/v2/all";


fetch(firstFetch)
    .then(response=>
        response.json()
        )
    .then(data=> {
        data.forEach(item=> createIt(item)
        )
    })
var displayPages=true
$(".getRegion").on("click",(event)=> {
    clearG();
    i=1;
    firstFetch="https://restcountries.com/v2/region/"+event.target.value;
    fetch(firstFetch)
    .then(response=>
        response.json()
        )
    .then(data=> {
        data.forEach(item=> createIt(item)
        )
    })
})
$("#searchByName").on("click",()=>{
    let nameS=$(".getCountryName").val();
    clearG();
    firstFetch="https://restcountries.com/v2/name/"+nameS+"?";
    fetch(firstFetch)
    .then(response=>
        response.json()
        )
    .then(data=> {
        $("#message1").remove();
        data.forEach(item=> createIt(item))
    })
    .catch(()=> {
            $("#message1").remove();
            let message1=document.createElement("h1");
            message1.setAttribute("id","message1");
            message1.style.color="#e04d12e1";
            message1.style.width="25%";
            message1.style.margin="auto";
            message1.style.fontSize="2rem";
            message1.innerHTML="We couldn't find anything that contain '"+nameS+"'"
            document.getElementById("allContainer").appendChild(message1);
    }) 

} )
$("#goMain").on("click", ()=> {
    createIt(firstFetch)
})
$("#darkMode").on("click", ()=> {
darkMode=!darkMode;
if (darkMode) {
    $("body").css("backgroundColor","hsl(0, 0%, 98%)");
    $("*").css("color","hsl(200, 15%, 8%)");
    $(".header").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".search").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".filter").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".getCountryName").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".countriesList").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".regions").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".getRegion").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".backButton").css("backgroundColor","hsl(0, 0%, 92%)");
    $(".borderCountries").css("backgroundColor","hsl(0, 0%, 92%)");
    $("#backB").css("backgroundColor","hsl(0, 0%, 92%)");
}
else {
    $("body").css("backgroundColor","hsl(207, 26%, 17%)");
    $("*").css("color","hsl(0, 0%, 100%)");
    $(".header").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".search").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".filter").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".getCountryName").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".countriesList").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".regions").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".getRegion").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".backButton").css("backgroundColor","hsl(209, 23%, 22%)");
    $(".borderCountries").css("backgroundColor","hsl(209, 23%, 22%)");
    $("#backB").css("backgroundColor","hsl(209, 23%, 22%)");
}
})

    
$(".backButton").on("click", ()=> {
location.reload();
});

$(".filter").on("click",()=> {
    regionShower=!regionShower;
    if(regionShower) {
        $(".regions").fadeIn(300 , ()=> {
            $(".regions").css("display","block")
        }); 
        }
    
    else {
        $(".regions").fadeOut(150 , ()=> {
            $(".regions").css("display","none")
        }); 
    } 
});

function clearG() {
    $(".regions").css("display","none")
    $(".countriesList").remove();
}

function createIt(data) {   
    a=document.createElement("div");
    a.setAttribute("class","countriesList");
    a.setAttribute("id","countriesLister"+i);
    document.getElementById("allContainer").appendChild(a);  
    img=document.createElement("div")
    img.setAttribute("class","imgContainer");
    img.setAttribute("id","container"+i)
    img1=document.createElement("img");
    img1.src=data.flags.png;
    document.getElementById("countriesLister"+i).appendChild(img)
    document.getElementById("container"+i).appendChild(img1)
    b=document.createElement("div");
    b.setAttribute("class","infoContainer");
    b.setAttribute("id","infoContainer"+i);
    document.getElementById("countriesLister"+i).appendChild(b);
    baslik=document.createElement("h2");
    baslik.setAttribute("class","countryName");
    baslik.setAttribute("id","countryName"+i);
    document.getElementById("infoContainer"+i).appendChild(baslik);
    document.getElementById("countryName"+i).innerHTML=data.name;
    icerik1=document.createElement("h3");
    icerik2=document.createElement("h3");
    icerik3=document.createElement("h3");
    icerik1.setAttribute("class","infos");
    icerik1.setAttribute("id","infos"+i);
    icerik2.setAttribute("class","infos");
    icerik2.setAttribute("id","infos"+i);
    icerik3.setAttribute("class","infos");
    icerik3.setAttribute("id","infos"+i);
    document.getElementById("infoContainer"+i).appendChild(icerik1);
    document.getElementById("infoContainer"+i).appendChild(icerik2);
    document.getElementById("infoContainer"+i).appendChild(icerik3);
    icerik1.innerHTML="Population : " +data.population;
    icerik2.innerHTML="Region : "+data.region;
    icerik3.innerHTML="Capital : "+data.capital;
    
    
        $("#countriesLister"+i).on("click",()=> 
        {
        displayPages=false;
        if(displayPages==true)
        {
        $(".main").css("display","block")
        $(".detailPage").css("display","none")
        }
        else {
        $(".main").css("display","none")
        $(".detailPage").css("display","block")
        }
        let i=document.getElementById("flagss")
        i.setAttribute("src",data.flags.svg)
        document.getElementById("flagDetail").appendChild(i)
        $("#nameId").text(data.name);
        $("#nativeName").text(data.nativeName);
        $("#population").text(data.population);
        $("#region").text(data.region);
        $("#subRegion").text(data.subregion);
        $("#capital").text(data.capital);
        $("#topLevelDomain").text(data.topLevelDomain);
        $("#currencies").text(data.currencies.name);
        $("#languages").text(data.languages.name);
        if(data.borders) {
        data.borders.forEach(isim=> {
            let borders=document.createElement("input");
            borders.type="button";
            borders.setAttribute("class","borderCountries");
            borders.setAttribute("id","borderCountries"+isim);
            document.getElementById("borderbtnContainer").appendChild(borders);
            fetch("https://restcountries.com/v2/alpha?codes="+data.borders[borderSayar])
                .then(response=>
                    response.json()
                    )
                .then(takeName=> {
                    takeName.forEach(item1=> {
                        borders.value=item1.name;
                        $("#borderCountries"+isim).on("click",()=> {
                            i.setAttribute("src",item1.flags.svg)
                            $("#nameId").text(item1.name);
                            $("#nativeName").text(item1.nativeName);
                            $("#population").text(item1.population);
                            $("#region").text(item1.region);
                            $("#subRegion").text(item1.subregion);
                            $("#capital").text(item1.capital);
                            $("#topLevelDomain").text(item1.topLevelDomain);
                            $("#currencies").text(item1.currencies.name);
                            $("#languages").text(item1.languages.name);
                            $(".borderCountries").remove();
                        })
                    })
                })
            borderSayar++;
        })}
        else {
        let message=document.createElement("h4");
        message.setAttribute("id","message");
        message.style.color="#e04d12e1";
        message.innerHTML="This Country Don't have any Border"
        document.getElementById("borderbtnContainer").appendChild(message);

        }
        });
    i++;        
}