function processSongData(songData) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    function printSongsByType(songs, typeFilter) {
        for (let song of songs) {
            if (typeFilter === "all" || song.typeList === typeFilter) {
                console.log(song.name);
            }
        }
    }

    let n = +songData[0];
    let songs = [];

    for (let i = 1; i <= n; i++) {
        let songInfo = songData[i].split("_");
        let typeList = songInfo[0];
        let name = songInfo[1];
        let time = songInfo[2];
        songs.push(new Song(typeList, name, time));
    }

    let typeFilter = songData[n + 1];
    printSongsByType(songs, typeFilter);
}



processSongData([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater']);
