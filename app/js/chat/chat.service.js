function chatService($firebaseArray){

    var messagesRef = firebase.database().ref().child("messages");
    var chat = {};


    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }

    chat.getMessagesToShow = function(){
        return $firebaseArray(messagesRef.limitToLast(15))
    }
    
    chat.addMessage = function(mess){
        chat.getMessages().$add(mess);
    }
    
    return chat;
}

angular.module('chatApp')
.factory('chatService', ['$firebaseArray', chatService])