import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpPage } from 'pages';
import { RootState } from 'store';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

describe('SignUpPage', () => {
  const testEmail = 'test@test.com';

  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<SignUpPage />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after sign up should save user's data, change user's status to 'complete'", async () => {
    const { store } = renderWithProviders(<SignUpPage />);

    const template = screen.getByTestId('signup-template-test-id');
    const emailInputField = within(template).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(template).getByTestId(
      'input-field-password-test-id'
    );
    const signUpBtn = within(template).getByTestId('btn-submit-signup-test-id');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, 'password');
    await userEvent.click(signUpBtn);

    const userStore = store.getState().user;

    expect(userStore.status).toBe('complete');
    expect(userStore.userData?.firstname).toBe('Baby');
    expect(userStore.userData?.lastname).toBe('Yoda');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it("if user exist should update store with new user's data", async () => {
    const preloadedState: RootState = {
      user: {
        status: 'complete',
        userData: {
          avatarUrl: 'url',
          birthday: 'birthday',
          createdAt: 'createdAt',
          email: 'email',
          firstname: 'firstname',
          lastname: 'lastname',
          username: 'username',
          uuid: 'uuid',
        },
      },
    };

    const { store } = renderWithProviders(<SignUpPage />, { preloadedState });

    const template = screen.getByTestId('signup-template-test-id');
    const emailInputField = within(template).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(template).getByTestId(
      'input-field-password-test-id'
    );
    const signUpBtn = within(template).getByTestId('btn-submit-signup-test-id');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, 'password');
    await userEvent.click(signUpBtn);

    const userStore = store.getState().user;

    expect(userStore.userData?.firstname).toBe('Baby');
    expect(userStore.userData?.lastname).toBe('Yoda');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<SignUpPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
