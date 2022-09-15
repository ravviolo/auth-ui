import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginPage } from 'pages';
import { RootState } from 'store';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

describe('LoginPage', () => {
  const testEmail = 'test@test.com';

  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<LoginPage />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after log in should save user's data, change user's status to 'complete'", async () => {
    const { store } = renderWithProviders(<LoginPage />);

    const template = screen.getByTestId('login-template-test-id');
    const emailInputField = within(template).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(template).getByTestId(
      'input-field-password-test-id'
    );
    const loginBtn = within(template).getByTestId('btn-submit-login-test-id');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, 'password');
    await userEvent.click(loginBtn);

    const userStore = store.getState().user;

    expect(userStore.status).toBe('complete');
    expect(userStore.userData?.firstname).toBe('Anakin');
    expect(userStore.userData?.lastname).toBe('Skywalker');
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

    const { store } = renderWithProviders(<LoginPage />, { preloadedState });

    const template = screen.getByTestId('login-template-test-id');
    const emailInputField = within(template).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(template).getByTestId(
      'input-field-password-test-id'
    );
    const loginBtn = within(template).getByTestId('btn-submit-login-test-id');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, 'password');
    await userEvent.click(loginBtn);

    const userStore = store.getState().user;

    expect(userStore.userData?.firstname).toBe('Anakin');
    expect(userStore.userData?.lastname).toBe('Skywalker');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<LoginPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
