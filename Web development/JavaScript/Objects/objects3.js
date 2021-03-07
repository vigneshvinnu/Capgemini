class Rectangle {
     constructor(width,height){
       this.width=width;
       this.height=height;
     }
  getArea()
  {
  console.log(this.width*this.height);
  }
   }


   var Rectangle1 = new Rectangle(100,100)
   Rectangle1.height=500;
   Rectangle1.getArea();
