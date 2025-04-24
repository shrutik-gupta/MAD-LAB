const albums = [
    {
      image: 'images/song.jpg',
      name: 'Echoes of Silence',
      singer: 'The Weeknd',
      songs: ['D.D.', 'Montreal', 'Outside']
    },
    {
      image: 'images/song.jpg',
      name: 'Divide',
      singer: 'Ed Sheeran',
      songs: ['Shape of You', 'Perfect', 'Galway Girl']
    }
  ];
  
  const albumList = document.getElementById('albumList');
  albums.forEach(album => {
    albumList.innerHTML += `
      <div class="album">
        <img src="${album.image}" alt="${album.name}">
        <div class="album-info">
          <strong>${album.name}</strong><br>
          <em>${album.singer}</em><br><br>
          <ul>${album.songs.map(song => `<li>${song}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  });
  