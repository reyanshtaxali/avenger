var canvas = new fabric.canvas('mycanvas');
ironman_x = 10;
ironman_y = 10;
var ironman_object ="";
function ironman_update() {
    fabric.Image.fromURL("iron man.jpg", function (Img) {
        ironman_object = Img;
        ironman_object.scaleToWidth(150);
        ironman_object.scaleToHeight(140);
        ironman_object.set({
            top: ironman_y,
            left: ironman_x
        });
        canvas.add(ironman_object);
    });
}