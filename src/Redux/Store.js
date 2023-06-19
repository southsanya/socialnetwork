import dialogsReducer from "./dialogsReducer"
import maincontentReducer from "./maincontentReducer"

let store = {

  _state : {

    maincontent  : {
        newPostText : 'southsanya.com',
        postinfo : [ { id:'00001' , text:'You`re so awfull!' } , { id:'00002' , text:'Hi everyone!' } ],
        maininfo : {
            name: 'Alex Shestakov',
            date: '8 march',
            city: 'Kyiv',
            edu: 'KSAEU `24',
            site: 'southsanya.com',
            bcimage: 'https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*',
            avimage: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png'
          }
    },
    dialogs : {
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
  },
  _callSubscriber() {
    console.log('state changed') 
  },
  getState() {
    
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.maincontent = maincontentReducer( this._state.maincontent , action );
    this._state.dialogs = dialogsReducer( this._state.dialogs , action );
    this._callSubscriber(this._state);
        
  }
}



window.state = store;
export default store;