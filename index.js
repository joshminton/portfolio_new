// var themeIcons = document.querySelectorAll('.theme_icon')
//

var darkMode = true;

var changeCol = function() {
    if(darkMode){
        document.documentElement.setAttribute('data-theme', 'light');
        darkMode = false;
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode = true;
    }
}


document.querySelector('#themeToggle').addEventListener('click', changeCol, false);

function setInitialTheme() {

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  		console.log('dark mode is enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
    	// document.querySelector('#dark').classList.add('selected');
	} else {
  		console.log('dark mode is not enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
    	// document.querySelector('#colourful').classList.add('selected');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  	if (e.matches) {
    	console.log('dark mode is enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
        // document.querySelector('#dark').classList.add('selected');
  	} else {
  		console.log('dark mode is not enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
        // document.querySelector('#colourful').classList.add('selected');
  	}
	});
}

setInitialTheme();

function setAge() {
	var birth = new Date('1997-03-22');
	var now = new Date();
	var difference = now - birth;
	var age = new Date(difference).getFullYear() - 1970

	var span = document.getElementById('age');
	span.innerHTML = age;
}

// setAge();

function getContentfulAssetURL(data, id){
    for (var i = 0; i < data.includes.Asset.length; i++) {
        if(data.includes.Asset[i].sys.id == id){
            return img_link = 'https://' + data.includes.Asset[i].fields.file.url.substring(2)
        }
    }
}

// <a class="project shadowed" href="https://youtu.be/Q7448UCTyXk">
//     <img src="video_thumbnails/morgan_thumb.png"></img>
//     <p class="project_text_holder">Morgan Sign</p>
// </a>

//
// const filmGrid = document.querySelector('#film_grid')
//
// fetch('https://cdn.contentful.com/spaces/t2ob7i6525u0/entries?access_token=auaXD-PMbWyn3gce66QXgTVkkaa5g1j7QUnNrGByha4&content_type=film')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     data.items.forEach(film => {
//       const a = document.createElement('a')
//       const img = document.createElement('img')
//       const p = document.createElement('p')
//       a.classList.add('project')
//       a.classList.add('shadowed')
//       a.setAttribute('href', film.fields.url)
//
//       var img_link = getContentfulAssetURL(data, film.fields.photo.sys.id)
//       img.setAttribute('src',  img_link)
//       p.classList.add('project_text_holder')
//       p.textContent = film.fields.title
//       filmGrid.appendChild(a)
//       a.appendChild(img)
//       a.appendChild(p)
//     })
//   })
//   .catch(err => {
//     // Do something for an error here
//   })


$(document).ready(function() {

    function setActiveSection() {
        console.log($(window).width())
        if($(window).width() > 576){
            var thirdWay = ($(window).height() / 3) * 2;
            var scrollPos = $(window).scrollTop();
            // var notSet = true;
            $('.section').each(function(i){
                if(!isElementMostlyOffscreen(this)) {
                    // $('.selected').removeClass('selected')
                    // $('.inView').removeClass('inView')
                    $('.sidebar div').eq(i).addClass('selected')
                    $('.section').eq(i).addClass('inView')
                    // notSet = false;
                } else {
                    $('.selected').eq(i).removeClass('selected')
                    $('.inView').eq(i).removeClass('inView')
                }
            })
            // if(notSet){
            //     $('.selected').removeClass('selected')
            // }
        } else {
            $('.section').addClass('inView')
        }
    }
    $(window).scroll(function() {
        setActiveSection();
    });

    // setActiveSection();
});

function isElementMostlyOffscreen(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Calculate the visible area for both top and bottom
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleHeight = visibleBottom - visibleTop;

  // Check if the top is more than two-thirds down
  const isTopMostlyOffscreen = visibleTop > (2 / 3) * viewportHeight;

  // Check if the bottom is less than a third from the top
  const isBottomMostlyOffscreen = visibleBottom < (1 / 3) * viewportHeight;

  return isTopMostlyOffscreen || isBottomMostlyOffscreen;
}

