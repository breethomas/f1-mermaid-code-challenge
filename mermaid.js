function Mermaid (obj){
  this.name = obj.name;
  this.trinkets = obj.trinkets || ['ring', 'necklace', 'diamond']

}

Mermaid.prototype.shout = function (newName){
  this.name = newName;
}

Mermaid.prototype.organize = function (){
  return this.trinkets.sort()
}

Mermaid.prototype.cleanTrinkets = function (){
   return this.trinkets.filter(function (value){
    if (typeof value === 'string') {
      return value
      }
  })
}

Mermaid.prototype.buildSong = function (){
  this.organize()
  return 'I love '+this.trinkets[0]+',I love '+this.trinkets[2]+',I love '+this.trinkets[3]+',I love '+this.trinkets[1]+''
}

module.exports = Mermaid;