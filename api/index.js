var     fs      = require('fs'),
        path    = require('path');

exports.getImages = function(request, response) {
    var fileType = '.jpg',
        files = [], i;
    fs.readdir('./photos', function (err, list) {
        for (i=0; i<list.length; i++) {
            if (path.extname(list[i]) === fileType) {
                files.push(list[i]); //store the file name into the array files
            }
        }
        response.jsonp(files);
    });
};