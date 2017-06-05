;
$(function() {

  $('.scroll').niceScroll({
    cursorcolor:"#0e7db1",
    cursoropacitymin: 1,
    cursorwidth: "5px",
    cursorborder: "0",
    cursorborderradius: "5px",
    background: "#eee",
    spacebarenabled: true,
    railoffset: { top: 7, left: -10},
    railpadding: { top: 0, right: 0, bottom: 15 }
    
  });

  $('.profile__jslist--scroll').niceScroll({
    cursorcolor:"#0e7db1",
    cursoropacitymin: 0.1,
    cursorwidth: "5px",
    cursorborder: "0",
    cursorborderradius: "5px",
    background: "#eee",
    spacebarenabled: true,
    railoffset: { top: 1, left: 4},
    railpadding: { top: -3, right: 0, bottom: 3 }
  })

})