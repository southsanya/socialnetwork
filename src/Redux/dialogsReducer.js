

let _actionCreators = {
    addpost : 'ADD-POST' ,
    updatepost : 'UPDATE-NEW-POST-TEXT' ,
    addmessage : 'ADD-MESSAGE',
    updatemessage : 'UPDATE-NEW-MESSAGE-TEXT'
  }

let initialState = {
    newMessagesText : 'hello',
    users : [
        { id:'00001' , username:'Sasha' },
        { id:'00002' , username:'Misha' },
        { id:'00003' , username:'Gosha' },
        { id:'00004' , username:'Rosha' },
        { id:'00005' , username:'Liosha' },
      ],
    messages : [
        { id:'00001' , content:'Hi' },
        { id:'00002' , content:'Yo' },
        { id:'00003' , content:'Go' },
        { id:'00004' , content:'AO' },
        { id:'00005' , content:'Il' },
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


