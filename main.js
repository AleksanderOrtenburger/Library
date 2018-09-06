class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
      }
  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
    get ratings(){
    return this._ratings
  }
  set isCheckedOut(bol){
    this._isCheckedout = bol;
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut=== true){
      this._isCheckedOut = false;
    }else{
      this._isCheckedOut = true;
    }
    return this._isCheckedout;
  }
  getAverageRating(){
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    let averageRating = ratingsSum/ lengthOfArray;
    return averageRating;
  }
  addRating(a){
    this._ratings.push(a);
    return this._ratings
  }
}
class Book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get pages(){
    return this._pages
  }
  get author(){
    return this._author
  }
}
class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
}
