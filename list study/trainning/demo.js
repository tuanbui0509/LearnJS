import { createStore } from 'redux'
import { status, sort } from './actions/index';
import myReducer from './reducers/index'

const store = createStore(myReducer);
console.log('Default: ', store.getState());
// thuc hien cong viec thay doi status
store.dispatch(status())
console.log('Toggle_status: ', store.getState());

store.dispatch(sort({
    by: 'hihi',
    value: -1
}));
console.log('Sort toggle: ', store.getState());
