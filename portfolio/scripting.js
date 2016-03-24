var textButtons =
  [{id: "portfolioButton", text:"Portfolio tekst"},
   {id: "githubButton", text:"Github tekst"},
   {id: "aboutMeButton", text:"About me tekst"}
  ]

function handleMouseOver(Button){;
  Button.siblings().animate({
    height: "-=100px",
    width: "-=100px"
  });
  Button.siblings().html("");
  Button.animate({
    height:"+=150px",
    width:"+=450px"
  },500)
}

function handleMouseLeave(Button){
  Button.animate({
    height: "-=150px",
    width: "-=450px"
  },500);
  Button.siblings().each(function(){
    for(var i =0; i < textButtons.length; i++){
      if($(this).attr("id") == textButtons[i].id){
        $(this).html(textButtons[i].text);
      }
    }
  });
  Button.siblings().animate({
    height: "+=100px",
    width: "+=100px"
  });
}
$("#container").children().on("mouseover",function(){
    handleMouseOver($(this));
});
$("#container").children().on("mouseleave",function(){
    handleMouseLeave($(this));
});
