import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RootState } from 'app/store';
import { SignUpPage } from 'pages';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

describe('SignUpPage', () => {
  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<SignUpPage />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after sign up should save user's data, change user's status to 'complete'", async () => {
    const { store } = renderWithProviders(<SignUpPage />);

    const testEmail = 'test@test.com';

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

  it("should update current user's data after sign up", async () => {
    const preloadedState: RootState = {
      user: {
        userData: {
          uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
          firstname: 'Anakin',
          lastname: 'Skywalker',
          username: 'Mr_Vader',
          birthday: 'Wed Jul 31 1963',
          email: 'preloaded@state.com',
          createdAt: 'Thu Jun 20 2002',
          avatarUrl: 'avatarUrl',
        },
        status: 'complete',
      },
    };

    const { store } = renderWithProviders(<SignUpPage />, { preloadedState });

    const testEmail = 'test@test.com';

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

  it('should match snapshot', () => {
    const tree = createWithProviders(<SignUpPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
