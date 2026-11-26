# Portfolio Front End

## Login and sign-up

Login and sign-up are separate pages registered in the router in `src/main.jsx`:

- `/authorization/login` renders `src/pages/authLogin.jsx`.
- `/authorization/sign-up` renders `src/pages/authSignUp.jsx`.

`MenuHeader` links to these routes. Since each route identifies its own form, choosing between login and sign-up no longer depends on the `authState` navigation state.

The forms use `method="post"` and submit to `/auth-login` and `/auth-signUp`, respectively. These endpoints should match the routes implemented by the API.

## Form validation

The sign-up form compares the password and confirmation on the client using Zod. This validation helps guide the user but does not replace API-side validation: the server must validate the submitted data and enforce authentication rules. The login form's `handleSubmit` implementation is still in progress.
