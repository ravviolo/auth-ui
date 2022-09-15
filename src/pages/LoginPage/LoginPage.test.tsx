/* eslint-disable no-console */
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginPage } from 'pages';
import { RootState } from 'store';
import { createWithProviders, renderWithProviders } from 'utils/test-utils';

const mockNavigate = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

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

  it("should log 'Logging user via Google' after clicking on Google icon button", async () => {
    renderWithProviders(<LoginPage />);
    console.log = jest.fn();

    const googleIconBtn = within(
      screen.getByTestId('auth-socials-login-template-test-id')
    ).getByTestId(/icon-btn-google-test-id/i);

    await userEvent.click(googleIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via Google');
  });

  it("should log 'Logging user via Facebook' after clicking on Facebook icon button", async () => {
    renderWithProviders(<LoginPage />);
    console.log = jest.fn();

    const facebookIconBtn = within(
      screen.getByTestId('auth-socials-login-template-test-id')
    ).getByTestId(/icon-btn-facebook-test-id/i);

    await userEvent.click(facebookIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via Facebook');
  });

  it("should log 'Logging user via LinkedIn' after clicking on LinkedIn icon button", async () => {
    renderWithProviders(<LoginPage />);
    console.log = jest.fn();

    const linkedInIconBtn = within(
      screen.getByTestId('auth-socials-login-template-test-id')
    ).getByTestId(/icon-btn-linkedin-test-id/i);

    await userEvent.click(linkedInIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via LinkedIn');
  });

  it("should log 'Reset password' after clicking on reset password button", async () => {
    renderWithProviders(<LoginPage />);
    console.log = jest.fn();

    const resetPasswordBtn = within(
      screen.getByTestId('login-form-test-id')
    ).getByTestId('btn-reset-password-test-id');

    await userEvent.click(resetPasswordBtn);

    expect(console.log).toHaveBeenCalledWith('Reset password');
  });

  it('should handle page navigation', async () => {
    renderWithProviders(<LoginPage />);

    const navigateBtn = within(
      screen.getByTestId('auth-footer-login-template-test-id')
    ).getByTestId('btn-footer-test-id');

    await userEvent.click(navigateBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/signup');
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<LoginPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
