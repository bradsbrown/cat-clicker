var model = {
  currentCat: 0,
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
};

var octopus = {
  init: function() {
    model.currentCat = 0;
    dispCat = model.cats[0]
    listView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return dispCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat_id) {
    model.currentCat = cat_id;
    dispCat = model.cats[cat_id];
  },

  incrementCounter: function() {
    dispCat.count++;
    catView.render();
  },

  updateCat: function(c_name, c_url, c_count) {
    dispCat.name = c_name;
    dispCat.pic = c_url;
    dispCat.count = c_count;
    catView.render();
  }

};

var catView = {
  init: function() {
    this.catElem = document.getElementById('cat');
    this.catName = document.getElementById('cat-name');
    this.catImg = document.getElementById('cat-img');
    this.catCount = document.getElementById('cat-count');
    this.adminName = document.getElementById('admin-name');
    this.adminURL = document.getElementById('admin-url');
    this.adminCount = document.getElementById('admin-count');
    this.adminToggle = document.getElementById('admin-toggle');
    this.adminForm = document.getElementById('admin-area');

    this.catImg.addEventListener('click', function() {
      octopus.incrementCounter();
    });

    this.adminToggle.addEventListener('click', function(e) {
      e.preventDefault();
      $('#admin-area')[0].style.display = $('#admin-area')[0].style.display === 'none' ? '' : 'none';
    });

    $('#admin-cancel').on('click', function(e) {
      e.preventDefault()
      $('#admin-area')[0].style.display = $('#admin-area')[0].style.display === 'none' ? '' : 'none';
    });

    $('#admin-submit').on('click', function(e) {
      e.preventDefault()
      var name = $('#admin-name').val();
      var url = $('#admin-url').val();
      var count = $('#admin-count').val();
      octopus.updateCat(name, url, count);
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    $(this.catName).text(currentCat.name);
    $(this.catCount).text(currentCat.count);
    $(this.catImg).attr('src', currentCat.pic);
    $(function() {
      $('#admin-name').val(currentCat.name);
      $('#admin-url').val(currentCat.pic);
      $('#admin-count').val(currentCat.count);
    });
  }
};

var listView = {
  init: function() {
    this.catListElem = document.getElementById('cat-list');

    this.render();
  },

  render: function() {
    var cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];

      var elem = document.createElement('li');
      elem.textContent = cat.name;
      elem.id = i;

      elem.addEventListener('click', function(e) {
          octopus.setCurrentCat(this.id);
          catView.render();
        });

      this.catListElem.appendChild(elem);
    };
  },
};

$(document).ready(function() {
  octopus.init();
});

// function renderList() {
//     for (cat in model.cats) {
//       var meow = model.cats[cat];
//
//       var HTMLcatRaw = "<li><button id='button%num%'>%name%</button></li>";
//       var HTMLcatNamed = HTMLcatRaw.replace('%name%', meow.name);
//       var HTMLcatLinked = HTMLcatNamed.replace('%num%', cat);
//       $('.sidebar-nav').append(HTMLcatLinked);
//     };
//   };
//
//
// function renderCat(num) {
//   var meow = model.cats[num];
//   var catShowRaw = "<div class='cat' id='%id%'><h1>%name%</h1><img style='max-width: 100%' src='%pic%'><h2 class='number'>%count%</h2><h3>Clicks</h3></div>";
//   var catShowID = catShowRaw.replace('%id%', num);
//   var catShowName = catShowID.replace('%name%', meow.name);
//   var catShowLinked = catShowName.replace('%pic%', meow.pic);
//   var catShowReady = catShowLinked.replace('%count%', meow.count);
//   $('#main').html(catShowReady);
// };
//
//
// function bindButtonToCat(idNumber) {
//   var cat = $('button').filter($('#button' + idNumber));
//   $(cat).click(function(event) {
//     renderCat(idNumber);
//     bindCounterToCat(idNumber);
//   });
// };
//
//
// function bindCounterToCat(idNumber) {
//   var cat = $('.cat').filter($('#' + idNumber));
//   var clicks = model.cats[idNumber].count;
//   $(cat).click(function(event) {
//     clicks = clicks + 1;
//     $(this).find('.number').text(clicks)
//   });
// };
//
//
// function refreshCat(idNumber) {
//   renderCat(idNumber);
//   bindCounterToCat(idNumber);
// };
//   // $('.cat').click( function(event) {
//   //   var number, count;
//   //   number = $(event.currentTarget).find('.number')
//   //   count = number.text();
//   //   inc = parseInt(count) + 1;
//   //   number.text(inc);
//   // });
//
//
// $(document).ready(function() {
//   renderList();
//   for (var i=0; i<model.cats.length; i++) {
//     bindButtonToCat(i)
//     clicks.push(0)
//   };
//   refreshCat(0);
// });
