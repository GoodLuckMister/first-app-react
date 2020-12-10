let rerenderEntireTree = () => {
    console.log("state changed")
}
let state = {
    contentPage: {
        posts: [
            {message: 'Hello my friend', likesCount: 15},
            {message: 'I\'m fine', likesCount: 20}],
        newPostText: 'hello js'
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Kolya'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Tolik'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Roma'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I coming you'},
            {id: 3, message: 'Babe got me'},
            {id: 4, message: 'You actor man'}
        ],
        newMessageText: 'hola hola'
    },
    asidePage: {
        asideSet: [
            {id: '/content', paragraph: 'Profile'},
            {id: '/dialogs', paragraph: 'Messages'},
            {id: '/news', paragraph: 'News'},
            {id: '/music', paragraph: 'Music'},
            {id: '/settings', paragraph: 'Settings'}
        ]
    }

}
window.state = state;
export const addPost = () => {

    let newPost = {
        message: state.contentPage.newPostText,
        likesCount: 0
    };
    state.contentPage.posts.push(newPost);
    state.contentPage.newPostText = '';
    rerenderEntireTree(state);

}
export const updateNewPostText = (newText) => {

    state.contentPage.newPostText = newText;
    rerenderEntireTree(state);
}
export const addMessage = () => {


    let newMessage = {
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.messages.push(newMessage);
    state.dialogPage.newMessageText = '';

    rerenderEntireTree(state);

}
export const updateNewMessageText = (newTextText) => {

    state.dialogPage.newMessageText = newTextText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;




