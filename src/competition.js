class Competition {
    constructor(max, min){
    this._max = max
    this._min = min
    this._judges = []
    }
    standard(){
        for(let i =0; i<this._judges.length; i++){
            if(this._judges[i] > this._max){
                return this._judges[i] = this._max
            }
            if(this._judges[i] < this._min){
                return this._judges[i] = this._min
            }
        }
        return this._judges
        
        
    }


}
module.exports = Competition