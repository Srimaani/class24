class log{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,angle)
        this.width=width
        this.height=height
        Matter .Body.setAngle(this.body,angle)
        World .add(world,this.body)

    }
    display(){
        push ()
        translate(this.body.position.x,this.position.body.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect (0,0,this.width,this.height)
        pop ()


    }
}