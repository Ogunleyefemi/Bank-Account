// Business logic
function Account(){
    this.details = {};
    this.accountId = 0;
}
Account.prototype.giveId = function(){
    this.accountId +=1;
    return this.accountId;
}
Account.prototype.addContact = function(users){
    users.Id = this.giveId();
    this.details[users.Id] = users;
}
Account.prototype.findContact = function(id) {
    if (this.details[id] != undefined) {
      return this.details[id];
    }
    return false;
  };
  Account.prototype.deleteContact = function(id) {
    if (this.details[id] === undefined) {
      return false;
    }
    delete this.details[id];
    return true;
  };
  // constructor for details
function Users(surName, firstName, phoneNumber,balance) {
    this.surName = surName;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.balance = 0.00;
};
Users.prototype.fullName = function(){
    return this.surName + " " + this.firstName;
};
Users.prototype.accountNumber = function(){
    let final = '300100' + this.phoneNumber - 90000999
    return  final;
};
Users.prototype.deposit = function(amount){
    this.balance += amount;
 }
 Users.prototype.withdraw = function(amount){
    if(this.balance - amount < 0 || this.balance - amount === 0){
      return 'Insufficient funds'
    }else{
      this.balance -= money
    }
  }
  let account = new Account();
  // UI logic
function displayContactDetails(contacts) {
    let contactsList = $("#contacts");
    let htmlForInfo = "";
    Object.keys(contacts.details).forEach(function(key) {
      const contact = contacts.findContact(key);
      htmlForInfo += "<li id" + contact.id + ">" + contact.surName + " " + contact.firstName + "</li>";
      });
     contactsList.html(htmlForInfo);
     console.log(displayContactDetails);
}
//   show dashboard
function showContact(accountId) {
    const contact = account.findContact(accountId);
    $("#show-contact").show();
    $(".accountName").html(contact.surName); 
    $(".amountDeposit").html(contact.balance);
}
//   event listener

function attachContactListeners() {
    $("#contacts").on("click", "li", function() {
      showContact(this.id);
    });
};


$(document).ready(function(){
    attachContactListeners();
    $("#fillForm").submit(function(event){
        event.preventDefault();
       const userSurName = $("#surname").val();
       const userFirstName = $("#firstname").val();
       const userDeposit = $("#initial").val();

        // $("#accountName").text(userSurName);
        // $("#amountDeposit").text(userDeposit);


    //    clear form
    $("#surname").val(" ");
    $("#firstname").val(" ");
    $("#deposit").val(" ");
    $("#phoneNumber").val(" ");
    $("#initial").val(" ");
   
    let customer = new Users(userSurName, userFirstName, userDeposit);
    account.addContact(customer);
    displayContactDetails(account);
    });
});