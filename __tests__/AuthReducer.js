import authReducer from '../src/reducers/AuthReducer'
import { EMAIL_CHANGED } from '../src/actions/types'

it('returns a new state', () => {
    const INITIAL_STATE = { email: 'boo' } 
    const theAction = { type: EMAIL_CHANGED, email: 'blah@foo.com' }

    expect(authReducer(INITIAL_STATE, theAction)).toMatchSnapshot()
})