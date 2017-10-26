var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: {
      'key': options['key'],
      'q': options['query'],
      'maxResults': options['max'],
      'part': 'snippet',
      'type': 'video'
    },
    success: function (data) {
      callback(data.items);
      // return callback(data.items) || data.items;
    }
  });

};

window.searchYouTube = searchYouTube;
