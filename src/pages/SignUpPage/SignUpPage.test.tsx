import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as reduxHooks from 'app/hooks';
import * as userSlice from 'features/user/userSlice';
import { SignUpPage } from 'pages';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

describe('SignUpPage', () => {
  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<SignUpPage />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after sign up should save user's data, change user's status to 'complete'", async () => {
    const mockRegisterUser = jest.spyOn(userSlice, 'registerUser');
    const mockDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');
    const testEmail = 'test@test.com';

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

    expect(mockRegisterUser).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toBeCalledTimes(2);

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
