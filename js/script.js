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
    if (this.detailss[id] === undefined) {
      return false;
    }
    delete this.details[id];
    return true;
  };
  // constructor for details
function Users(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
};
Users.prototype.accountNumber = function(){
    let final = '300100' + this.phoneNumber - 90000999
    return  final;
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