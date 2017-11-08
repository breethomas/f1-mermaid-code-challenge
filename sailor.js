function Sailor(name) {
  this.name = name;
  this.bucket = [];
}

Sailor.prototype.sing = function (mermaid){
  if (this.bucket.length < 3){
  this.bucket.push(mermaid.trinkets.shift())
  }
}


module.exports = Sailor;
