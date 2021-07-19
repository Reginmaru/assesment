const Competition = require("./../../src/competition")

describe("competition has a max and a low range of scores allowed", function(){
    it("has 10 as a max score", function(){
        let competition = new Competition(10)
        expect(competition._max).toEqual(10)
    })
    it("has 1 as a min score", function(){
        let competition = new Competition(10,1)
        expect(competition._min).toEqual(1)

    })
})
describe("competition displays values of judges", function(){
    xit("shows all the scores that the judges decided, this is before standardise is implemented into src/competition.js", function(){
        let competition = new Competition(10,1)
        competition._judges = [1,342,6,5462,23,534]
        expect(competition.standard()).toEqual([1,342,6,5462,23,534])
    })
    it("shows all the scores that the judges decided, after implementing standard system", function(){
        let competition = new Competition(10,1)
        competition._judges = [11,10,9]
        competition.standard()
        
        expect(competition._judges).toEqual([10,10,9])
    })

})