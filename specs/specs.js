describe('pingPong', function() {
  it("returns a digit for a single digit", function() {
    expect(pingPong(1)).to.eql([' 1']);
  });

  it("returns digits ascending to the inputed digit", function() {
    expect(pingPong(2)).to.eql([' 1', ' 2']);
  });

  it("retuns multiples of 3 as 'ping'", function() {
    expect(pingPong(4)).to.eql([' 1', ' 2', ' ping', ' 4']);
  });

  it("returns multiples of 5 as 'pong'", function() {
    expect(pingPong(5)).to.eql([' 1', ' 2', ' ping', ' 4', ' pong']);
  });

  it("returns multiples of 3 and 5 as 'pingpong'", function() {
    expect(pingPong(16)).to.eql([' 1', ' 2', ' ping', ' 4', ' pong', ' ping', ' 7', ' 8', ' ping', ' pong', ' 11', ' ping', ' 13', ' 14', ' ping-pong', ' 16']);
  });

});
