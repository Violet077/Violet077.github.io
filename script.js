// Definisikan daftar gambar dalam array
        var galleryItems = [
            { desc: "Milet", src: "foto/1.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/2.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/3.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/4.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/5.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/6.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/7.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/8.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/9.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/10.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/11.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/12.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/13.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/14.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/15.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/16.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/17.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/18.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/19.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/20.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/21.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/22.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/23.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/24.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/25.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/26.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/27.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/28.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/29.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/30.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/31.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/32.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/33.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/34.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/35.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/36.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/37.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/38.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/39.jpg", category: "Girl" },
			{ desc: "Milet", src: "foto/40.jpg", category: "Girl" },
            
            // Add more images here
        ];

        // Fungsi untuk mengacak array
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		// Acak galeri saat pertama kali dimuat
		shuffleArray(galleryItems);

		// Fungsi untuk merender gambar ke dalam elemen HTML (tanpa mengacaknya)
		function renderGallery(query = '', isShuffle = false) {
			var galleryDiv = document.getElementById('gallery');

			// Apply the fade-out class only if isShuffle is true
			if (isShuffle) {
				galleryDiv.classList.add('fade-out');
			}

			// Use setTimeout to wait for the transition to complete
			setTimeout(function () {
				if (isShuffle) {
					shuffleArray(galleryItems);
				}

				// Clear gallery before adding new items
				galleryDiv.innerHTML = '';

				galleryItems.forEach(item => {
					// If there is a search query, filter out non-matching items
					if (query && !item.desc.toLowerCase().includes(query.toLowerCase())) return;

					var galleryItem = document.createElement('div');
					galleryItem.className = 'gallery-item';
					galleryItem.onclick = function () {
						openLightbox(item.src);
					};

					var img = document.createElement('img');
					img.src = item.src;
					img.alt = item.desc;
					galleryItem.appendChild(img);

					var desc = document.createElement('div');
					desc.className = 'desc';
					desc.textContent = item.desc;
					galleryItem.appendChild(desc);

					galleryDiv.appendChild(galleryItem);
				});

				// Remove the fade-out class to make the gallery visible again
				if (isShuffle) {
					galleryDiv.classList.remove('fade-out');
				}
			}, 1000); // 500 milliseconds corresponds to the duration of the fade-out transition
		}

			
		// Function to open lightbox
        function openLightbox(src) {
            var lightbox = document.getElementById('lightbox');
            var lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = src;
            lightbox.style.display = 'block';
        }

        // Function to close lightbox
        function closeLightbox() {
            var lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        }
		
		// Event listener untuk input pencarian
		document.getElementById('searchInput').addEventListener('keyup', function() {
			renderGallery(this.value);
		});
		

        // Render galeri untuk pertama kali
        renderGallery();

        // Atur interval untuk merender galeri setiap 1 menit (60000 milidetik)
        setInterval(renderGallery, 10000);
		
		document.getElementById('darkModeToggle').addEventListener('click', function() {
			var body = document.body;
			var navbar = document.querySelector('.navbar');
			var mainContent = document.querySelector('.main-content');
			var galleryItems = document.querySelectorAll('.gallery-item');

			// Toggle dark mode class on various elements
			body.classList.toggle('dark-mode');
			navbar.classList.toggle('dark-mode');
			mainContent.classList.toggle('dark-mode');
			galleryItems.forEach(item => item.classList.toggle('dark-mode'));
			

		});

