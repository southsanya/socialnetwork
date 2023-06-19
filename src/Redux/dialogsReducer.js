

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
    
    switch(action.type) {
        case _actionCreators.addmessage : 
        let newMessage = {
            id:'00005',
            content: state.newMessagesText
          }
          state.messages.push(newMessage);
          state.newMessagesText = '';
          return state;
        case _actionCreators.updatemessage :
            state.newMessagesText = action.newMessage;
            return state;
        default : 
            return state;
    };
}

export let addMessageActionCreator = () => {
    return {
        type : _actionCreators.addmessage
    }
  }
  export let updateNewMessageTextContainer = (newMessage) => {
    return {
        type : _actionCreators.updatemessage ,
        newMessage : newMessage
    }
  }

export default dialogsReducer;


