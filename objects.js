// define playlist object
let playlist = {
	'Daft Punk' : 'Technologic',
	'Deadmau5' : 'I Remember'
};

// create the updatePlaylist function
let updatePlaylist = (playlist, artistName, songTitle) => {
	playlist[artistName] = songTitle;
	return playlist;
};

// create the removeFromPlaylist function
let removeFromPlaylist = (playlist, artistName) => {
	delete playlist[artistName];
	return playlist;
};