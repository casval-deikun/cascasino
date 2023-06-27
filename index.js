Kaikas.init({
  provider: "https://kaikas.app/",
  onReady: function() {
    // Connect to Kaikas wallet
    Kaikas.connect();
    // Get the address of the wallet
    var address = Kaikas.getAddress();
    // Add an event listener to the "send-20klay" button
    $("#send-20klay").on("click", function() {
      // Send 20 Klay to the specified address
      Kaikas.send(20000, "0x1a179E7A37E6A39dfFA5a77e7B6467E693945881");
    });
  }
});
