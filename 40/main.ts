//Define the make_album() function
function make_album(artist_name: string, album_title: string, tracks?: number) {
  let album: { artist: string; title: string; tracks?: number } = {
    
    artist:artist_name,
    title:album_title,
  };
  if (tracks !== undefined) {

    album.tracks = tracks;
    
  }
  return album;
}
//Calling three functions and creating 3 variables with different values
//First 
let album1 = make_album("Zubair Ahmed","Picture Album");

//Second
let album2 = make_album("Umaid Ali","Album_Title");

//Third
let album3 = make_album("Umaid Ali","Album_Title",10);

console.log(album1);

console.log(album2);

console.log(album3);

