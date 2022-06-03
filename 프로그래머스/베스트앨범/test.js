function solution(genres, plays) {
  let answer = [];
  let genrePlayCount = [];

  let songs = genres.map((t, i) => ({
    genre: t,
    index: i,
    playCount: plays[i],
  }));

  songs.forEach((song) => {
    let thisGenres = genrePlayCount.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    if (!thisGenres) {
      genrePlayCount.push({
        genre: song.genre,
        totalPlayCount: song.playCount,
      });
    } else {
      thisGenres.totalPlayCount += song.playCount;
    }
  });
  genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

  genrePlayCount.forEach((genrePlay) => {
    let thisGenreSongs = songs.filter((song) => genrePlay.genre === song.genre);
    thisGenreSongs.sort((a, b) => b.playCount - a.playCount);

    answer.push(thisGenreSongs[0].index);

    if (thisGenreSongs.length > 1) {
      answer.push(thisGenreSongs[1].index);
    }
  });

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(getPermutations(arr, 20));
