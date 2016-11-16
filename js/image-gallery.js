window.onload = function () {


//    (function () {
        var Variables = {
                numOfIssues: 8
            },
            DOM = {
                'img-gallery': document.querySelector('.img-gallery'),
                'img-over': document.querySelector('.img-over')
            },
            Functions = {
                openImage: function (thisImage) {
                    //                var divFixed = '';
                    DOM['img-over'].style.display = 'block';
                    DOM['img-over'].innerHTML.src = thisImage.src;
                },
                loadGallery: function () {
                    var images = '';
                    var i;
                    for (i = 1; i <= Variables.numOfIssues; i++) {
                        images = images + '<div class="col-lg-3 pull-left"><div class="col-lg-2"></div><img onclick="this.openImage(this);" class="issue-cover" src="img/Issues/' + i + '.jpg"></div>'
                    }
                    DOM['img-gallery'].innerHTML = images;
                }
            };
Functions.loadGallery();
//    })();
}