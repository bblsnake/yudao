var a = {
    name: "Cherry",
    func1: function(){
        console.log(this.name);
    },
    func2: function(){
        setTimeout(function(){
            this.func1();
        },1000)
    }
}