function sendFeedback(){
  db.collection("feedback").add({
    msg: msg.value
  });
  alert("Sent");
}