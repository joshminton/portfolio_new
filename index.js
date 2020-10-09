const photoGrid = document.querySelector('.photo_grid')

for (var i = 0; i < 12; i++) {
	const div = document.createElement('div')
	div.classList.add('photo')
	div.classList.add('shadowed')
	div.setAttribute('background-color', 'blue')
	div.style.opacity = 1;

	div.addEventListener('click', () => {
		// console.log(square.style.opacity)
		const popup = document.querySelector('.popup')
  		popup.style.visibility = 'visible'
  		const body = document.querySelector('body')
  		body.classList.add('noScroll')
  		div.classList.add('shadowed')
	})

	photoGrid.appendChild(div)
}

var themeIcons = document.querySelectorAll('.theme_icon')

var changeCol = function() {
	for (var i = 0; i < themeIcons.length; i++) {
		themeIcons[i].classList.remove('selected');
	}
	this.classList.add('selected')
	document.documentElement.setAttribute('data-theme', this.getAttribute('id'));
}

for (var i = 0; i < themeIcons.length; i++) {
	var icon = themeIcons[i];
	icon.addEventListener('click', changeCol, false);
}

function setInitialTheme() {

	if (window.matchMedia('prefers-color-scheme: dark').matches) {
  		console.log('dark mode is enabled');
    	document.documentElement.setAttribute('data-theme', 'dark');
    	document.querySelector('#dark').classList.add('selected');
	} else {
  		console.log('dark mode is not enabled');
    	document.documentElement.setAttribute('data-theme', 'colourful');
    	document.querySelector('#colourful').classList.add('selected');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  	if (e.matches) {
    	console.log('dark mode is enabled');
    	document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('#dark').classList.add('selected');
  	} else {
  		console.log('dark mode is not enabled');
    	document.documentElement.setAttribute('data-theme', 'colourful');
        document.querySelector('#colourful').classList.add('selected');
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

setAge();

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


const filmGrid = document.querySelector('#film_grid')

fetch('https://cdn.contentful.com/spaces/t2ob7i6525u0/entries?access_token=auaXD-PMbWyn3gce66QXgTVkkaa5g1j7QUnNrGByha4&content_type=film')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    data.items.forEach(film => {
      const a = document.createElement('a')
      const img = document.createElement('img')
      const p = document.createElement('p')
      a.classList.add('project')
      a.classList.add('shadowed')
      a.setAttribute('href', film.fields.url)

      var img_link = getContentfulAssetURL(data, film.fields.photo.sys.id)
      img.setAttribute('src',  img_link)
      p.classList.add('project_text_holder')
      p.textContent = film.fields.title
      filmGrid.appendChild(a)
      a.appendChild(img)
      a.appendChild(p)
    })
  })
  .catch(err => {
    // Do something for an error here
  })
