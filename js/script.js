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
    if(this.balance - amount < 0){
      return 'Insufficient funds'
    }else{
      this.balance -= money
    }
  }
// UI logic
let account = new Account();
// function to display fullname
function displayFullname(customers){
    let showFullname = $("#accountName");
    let htmlForContactInfo = "";
    Object.keys(customers.Users).forEach(function(key) {
      const customers = customers.fullName(key);
      htmlForContactInfo +=  customers.surName + " " + customers.firstName;
    });
    showFullname.html(htmlForContactInfo);

}




$(document).ready(function(){
    $("#register").submit(function(event){
        event.preventDefault();
        $("#submit").click(function(){
            $("#fillForm").hide();
            $("#show").show();
        });
    })
})