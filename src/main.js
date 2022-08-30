/**
 * 재미있는 조크를 가지고 있는 객체
 */
class JokeMachine {
  constructor() {
    this.jokes = [];
  }

  /**
   *
   * @returns {String} 랜덤 조크 가져오기
   */
  getRandomJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }

  /**
   * 랜덤 조크 콘솔
   */
  sayRandomJoke() {
    console.log(this.getRandomJoke(s));
  }

  /**
   *
   * @param {String} joke 재미있는 조크
   */
  addJoke(joke) {
    this.jokes.push(joke);
  }
}
