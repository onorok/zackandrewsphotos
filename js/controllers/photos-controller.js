app.controller('PhotosController', function ($scope) {
    var photos = {};

    $(document).keydown(function(event){
        if (event.key === 'ArrowLeft') {
            changeImage('prev', Number($('.nextPhoto').attr('data-next')));
        }

        if (event.key === 'ArrowRight') {
            changeImage('next', Number($('.nextPhoto').attr('data-next')));
        }
    });

    $('.nextPhoto').on('click', function() {
        var dataNext = Number($(this).attr('data-next'));
        changeImage('next', dataNext);
    });

    $('.prevPhoto').on('click', function() {
        var dataNext = Number($(this).attr('data-next'));
        changeImage('prev', dataNext);
    });
    
    var changeImage = function(direction, dataNext) {
        var next, prev, preload;

        console.log('change image:', direction);

        if (direction === 'next') {
            next    = dataNext+1;
            preload = dataNext+2;

            if (photos[next]) {
                $scope.$apply(function() {
                    $scope.photo = photos[next];
                    $scope.preload = photos[preload];
                });
            }
        } else {
            prev    = dataNext-1;
            preload = dataNext-2;

            if (photos[prev]) {
                $scope.$apply(function() {
                    $scope.photo = photos[prev];
                    $scope.preload = photos[preload];
                });
            }
        }
    };

    $.ajax({
            url         : 'API/getImages',
            dataType    : 'json'
        })
        .done(function (data) {
            var tempObj = {};

            console.log('Images loaded');

            _.each(data, function(value, key) {
                tempObj[key] = {};
                tempObj[key].url = 'photos/' + value;
                tempObj[key].index = key;
            });
            
            photos = tempObj;

            // load first image in array
            $scope.$apply(function() {
                $scope.photo = photos[0];
                $scope.preload = photos[1];
            });
        })
        .fail(function (result, textStatus) {
            console.log('Images failed to load');
        });
});