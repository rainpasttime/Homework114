"use strict";
describe("Guess four numbers",function(){
    const main = require('./main/main');

    it("spec one",function(){
        let result = main("1234","1234");
        expect(result).toEqual("4A0B");
    });

    it("spec two",function(){
        let result = main("1234","1235");
        expect(result).toEqual("3A0B");
    });

    it("spec three",function(){
        let result = main("1234","1256");
        expect(result).toEqual("2A0B");
    });

    it("spec four",function(){
        let result = main("1234","1756");
        expect(result).toEqual("1A0B");
    });

    it("spec five",function(){
        let result = main("1234","8756");
        expect(result).toEqual("0A0B");
    });

    it("spec six",function(){
        let result = main("1234","1374");
        expect(result).toEqual("2A1B");
    });

    it("spec seven",function(){
        let result = main("1234","1367");
        expect(result).toEqual("1A1B");
    });

    it("spec eight",function(){
        let result = main("1234","5647");
        expect(result).toEqual("0A1B");
    });

    it("spec nine",function(){
        let result = main("1234","1324");
        expect(result).toEqual("2A2B");
    });

    it("spec ten",function(){
        let result = main("1234","5324");
        expect(result).toEqual("1A2B");
    });

    it("spec eleven",function(){
        let result = main("1234","5326");
        expect(result).toEqual("0A2B");
    });

    it("spec twelve",function(){
        let result = main("1234","1342");
        expect(result).toEqual("1A3B");
    });

    it("spec thirteen",function(){
        let result = main("1234","5342");
        expect(result).toEqual("0A3B");
    });

    it("spec fourteen",function(){
        let result = main("1234","4321");
        expect(result).toEqual("0A4B");
    });
});

