# Github User Query with Controlled Components

For this exercise you'll query the Github Users API for profile information on a specific user. You'll create a form that submits a username to the API and return the results on the same page.

The Github API URL is (replace [username] with an actual username): https://api.github.com/users/[username]

_REMINDER_: You'll need to setup controlled components in your React form: https://reactjs.org/docs/forms.html

## Expected Behavior

- The page loads you see the form, but no user info
- Type a username into the input and click "submit"
- A user's information populates the page
- Additional users are added to the page with subsequent searches

## Getting Started
- Run `npx create-react-app github-users-query`
- Remove all the default information from `App.js` (you'll replace it with new components)
- Create a folder called `components`
- In that folder create:
  - `SearchForm` - This is the _default_ component. It's a Class based component that loads a search form and maintains `state`
  - `UserCardList` - Accepts an array of user data as a PROP
  - `UserCard` - Accepts a single user's information as a PROP

_NOTE:_ `UserCardList` and `UserCard` are are similar to the Random User exercise!

## Suggested Component Breakdown

## `SearchForm.jsx` (Class Based Component)

- Create a form in this component
  - The form will need a CONTROLLED text input and a submit button
  - The form will need a `_handleSubmit` function bound to `onSubmit`
  - The text input will need a `_handleChange` function bound to `onChange`
- Initial state for `SearchForm.jsx` should contain:
  - The value of the user name being searched (this is bound to our input!) i.e. `userName`
  - An array of user data (_we can request more than one user!_) i.e. `users`

### Functions

`handleChange`:

- This will `setState` to change the username value based on what is typed

`handleSubmit`:

- On submit the form will take the username value and make a `fetch()` request to the Github API
- The response from the API will be a _single user_.
- That response will need to be added to the existing array of users
- _HINT:_ The spread operator will come in handy here, eg: `[...this.state.users, newUserData]`

#### Notes

- Other than the `render()` method, you will not _need_ any other lifecycle methods.
- You're free to add lifecycle methods if you'd like (i.e. to start with at least one user being shown)

## `UserCardList` (Functional Component)

- This component takes the array of users (from `SearchForm`) as a prop
- `map` through this list, passing an individual user's information into the `UserCard` component

## `UserCard` (Functional Component)

- This component takes a user objects as a prop (from `UserCardList`)
- Render whatever data you'd like from a user's profile.
  - _NOTE_: Not all users have all their information filled out!
  - I'd recommend starting with the user's `avatar_url`, since almost every user has some sort of avatar image.

## BONUS

This exercise was inspired by the following blog post: https://flaviocopes.com/react-example-githubusers/

The blog post uses 100% functional components and React Hooks. If you'd like to try this method, create a new branch called `user-fetch-hooks` and refactor your project using Flavio's version as a template.