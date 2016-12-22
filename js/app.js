$(function() {
    $('#colorpicker').colorpicker().on('changeColor', function(e) {
        $('#brush-color').attr('data-color',e.color.toHex()).css('background',e.color.toHex());
        $('#brush-color').click();
    });
    $('#trump-sketch').sketch();
    
    $('#tool-state a').click(function() {
         $('#tool-state a').removeClass('active');
         $(this).addClass('active');
    })
    $('#download').click(function() {
        var imageObject = new Image();imageObject.src = 'images/asshole.jpg';
        var centerScreen = ($('.container').width() / 2) - 199;
        console.log('center: '+ centerScreen)
        var canvas = document.getElementById('trump-sketch'),
        context = canvas.getContext('2d');
        context.globalCompositeOperation="destination-over";
        context.drawImage(imageObject,centerScreen,0);
        downloadCanvas(this, 'trump-sketch', 'the_donald.png');
    })
    
});

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
