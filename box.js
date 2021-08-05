class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vy = vy;
      this.vx = vx;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move_up()
    {
      this.y = this.y+this.vy;
    }
    Move()
    {
      this.x = this.x + this.vx
    }
    bounce(){
      if(this.y <0 || this.y > height){
        this.vy = -this.vy
      }
    }
    bounce_x(){
      if(this.x <0 || this.x > width){
        this.vx = -this.vx
      }
  }
}
