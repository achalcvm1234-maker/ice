function orderItem(name, price) {

  let user = auth.currentUser;

  if (!user) {
    alert("Login First");
    return;
  }

  db.collection("orders").add({
    user: user.email,
    item: name,
    price: price,
    time: new Date()
  });

  localStorage.setItem("billItem", name);
  localStorage.setItem("billPrice", price);

  window.location="bill.html";
}