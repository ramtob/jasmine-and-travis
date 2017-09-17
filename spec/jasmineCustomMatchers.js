beforeEach(function() {
  jasmine.addMatchers({
    toBePlaying: function(util, customEqualityTesters) {
      return {
        compare: function(actualPlayer, expectedSong) {
            var result = {};
            result.pass = actualPlayer.currentlyPlayingSong === expectedSong &&
                actualPlayer.isPlaying;
            return result;
        }
      }
    }
  });
});
