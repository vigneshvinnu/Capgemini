function Laptop(Model, desk, name) {
    var text = {
        "model": Model,
        "No": desk,
        "Name": name
    };
    console.log("Model: " + text.model + " ,Desk_no: " + text.No + ", Name:" + text.Name);
}
Laptop("Hp I3 core Processor", 15, "Hp");
