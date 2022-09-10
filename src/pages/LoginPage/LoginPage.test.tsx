import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as reduxHooks from 'app/hooks';
import * as userSlice from 'features/user/userSlice';
import { LoginPage } from 'pages';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

describe('LoginPage', () => {
  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<LoginPage />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after log in should save user's data, change user's status to 'complete'", async () => {
    const mockLoginUser = jest.spyOn(userSlice, 'loginUser');
    const mockDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');
    const testEmail = 'test@test.com';

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

    expect(mockLoginUser).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toBeCalledTimes(2);

    const userStore = store.getState().user;

    expect(userStore.status).toBe('complete');
    expect(userStore.userData?.firstname).toBe('Anakin');
    expect(userStore.userData?.lastname).toBe('Skywalker');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<LoginPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
