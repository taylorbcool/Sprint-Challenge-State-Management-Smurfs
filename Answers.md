1. What problem does the context API help solve?

Context API helps solve the issue of prop drilling in react.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the mass storage of state for an entire app. Actions are functions that are called by components that dispatch reducers which change state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference is scope. App state is advantageous when using states like "isLoggedIn" or "isLoggedOut." Component state would be advantageous when a component's state needs to change but an app state remains the same.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows asynchronous actions to occur in react-redux. It can take in functions, call them, then return those results to the reducer, because the reducer can't take in functions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer redux as it scales much better than context api.