/* eslint-disable no-undef */
class MovieDy {
  constructor(renderMove) {
    this.overview = renderMove.overview;
    this.vote_average = renderMove.vote_average;
    this.title = renderMove.title;
    this.vote_count = renderMove.vote_count;
    this.poster_path = renderMove.poster_path;
    this.popularity = renderMove.popularity;
    this.release_date = renderMove.release_date;
  }
}

module.exports = MovieDy;
