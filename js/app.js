var cats = {
  "cats": [{
    "name": "Meowly",
    "pic": "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    "count": 0
  },
  {
    "name": "Peeky",
    "pic": "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
    "count": 0
  },
  {
    "name": "Burrito",
    "pic": "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
    "count": 0
  },
  {
    "name": "Grumpy",
    "pic": "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg",
    "count": 0
  },
  {
    "name": "Fancy",
    "pic": "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "count": 0
  }]
}


$(document).ready(function() {
  for (cat in cats.cats) {
    var meow = cats.cats[cat];

    var HTMLcatRaw = "<li><a href='#%num%'>%name%</a></li>";
    var HTMLcatNamed = HTMLcatRaw.replace('%name%', meow.name);
    var HTMLcatLinked = HTMLcatNamed.replace('%num%', cat);
    $('.sidebar-nav').append(HTMLcatLinked);

    var catShowRaw = "<div class='cat' id='%id%'><h1>%name%</h1><img style='max-width: 100%' src='%pic%'><h2 class='number'>%count%</h2><h3>Clicks</h3></div>";
    var catShowID = catShowRaw.replace('%id%', cat);
    var catShowName = catShowID.replace('%name%', meow.name);
    var catShowLinked = catShowName.replace('%pic%', meow.pic);
    var catShowReady = catShowLinked.replace('%count%', meow.count);
    $('#main').append(catShowReady);
  };
  $('.cat').click( function(event) {
    console.log("click!")
    var number, count;
    number = $("#" + event.target.id).find('.number')
    console.log(number)
    count = number.text();
    console.log(count)
    inc = parseInt(count) + 1;
    number.text(inc);
  });
});
