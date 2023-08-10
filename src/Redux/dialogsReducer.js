

let _actionCreators = {
    addpost : 'ADD-POST' ,
    updatepost : 'UPDATE-NEW-POST-TEXT' ,
    addmessage : 'ADD-MESSAGE',
    updatemessage : 'UPDATE-NEW-MESSAGE-TEXT'
  }

let initialState = {
    newMessagesText : 'hello',
    users : [
        { id:'00001' , username:'Test 1' },
        { id:'00002' , username:'Test 2' },
      ],
    messages : [
        { id:'00001' , content:'Добрий день! Дана сторінка знаходиться на стадії допрацювання. Більше інфо - @southsanya' },
        { id:'00001' , content:'На даній сторінці розроблюється функціонал листування, функціонал додавання повідомлень розблокований.' },

      ]
}

const dialogsReducer = ( state = initialState , action ) => {
    
    let stateCopy = {...state};
    stateCopy.users = [...state.users];
    stateCopy.messages = [...state.messages];

    switch(action.type) {
        case _actionCreators.addmessage : 
        let newMessage = {
            id:'00005',
            content: action.newMessageBody
          }
          stateCopy.messages.push(newMessage);
          return stateCopy;
        case _actionCreators.updatemessage :
            stateCopy.newMessagesText = action.newMessage;
            return stateCopy;
        default : 
            return stateCopy;
    };
}

export let addMessageActionCreator = (newMessageBody) => {
    return {
        type : _actionCreators.addmessage,
        newMessageBody
    }
  }
  export let updateNewMessageTextContainer = (newMessage) => {
    return {
        type : _actionCreators.updatemessage ,
        newMessage : newMessage
    }
  }

export default dialogsReducer;


