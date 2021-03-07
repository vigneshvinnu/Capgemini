class Rectangle {
    constructor(width,height){
      this.width=width;
      this.height=height;
    }
    getwidth(){
       console.log('The width is : '+this.width);
   }
   getheight(){
      console.log('The height is : '+this.height);
   }
  }

  var Rectangle1 = new Rectangle(4000000000000,400000000000000000)
  Rectangle1.getwidth();
  Rectangle1.getheight();

  var Rectangle2 = new Rectangle(100,100)
  Rectangle2.getwidth();
  Rectangle2.getwidth()