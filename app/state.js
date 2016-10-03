import {createStore} from 'redux';

const initialState = Object.freeze({
  concepts: ['underscore.js', 'jQuery', 'React.js', 'data structures', 'recursion',
    'Backbone.js', 'HTML5', 'CSS3', 'Linux command-line', 'D3.js', 'debugger\'s question', 'Chrome DevTools', 'pair programming', 'prototypal inheritance',
    'whiteboarding', 'AJAX', 'JSONP', 'ES6', 'MV* frameworks', 'complexity analysis',
    'apply, call, bind', 'the this keyword', 'closures'
  ],
  avatars: ['guy-hiker.png', 'girl-hiker.png'],
  currentAvatar: 'guy-hiker.png',
  startDate: new Date(2016, 8, 12),
  endDate: new Date(2016, 11, 10),
  currentDate: null
});

const reducer = (state=initialState, action) => {
  let copy = Object.assign({}, state);
  switch(action.type) {
    case 'updateDate':
      copy.currentDate = action.update;
      return copy;
    case 'updateProgress':
      state.progress = (new Date() - startDate) / (endDate - startDate)
      return state;
    case 'addConceptLearned':
      return state - 1;
    case 'updateAvatar':
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;