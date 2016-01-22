describe ('pingPong', function() {
  it("returns a digit for a single digit", function() {
    expect(pingPong(1)).to.equal[0, 1];
  });

  it("returns digits ascending to the inputed digit", function() {
    expect(pingPong(3)).to.equal[0, 1, 2, 3];
  });
});
