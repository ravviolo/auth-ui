/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Action } from '@reduxjs/toolkit';

import { RootState, setupStore } from 'store';

import userReducer, {
  loginUser,
  registerUser,
  selectUser,
  selectUserFetchStatus,
} from './userSlice';

describe('user reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action: Action<string> = { type: '' };
    const state = userReducer(initialState, action);

    expect(state).toEqual({ status: 'idle', userData: null });
  });
});

describe('thunks', () => {
  describe('loginUser w/ mocked dispatch', () => {
    it('should dispatch two actions', async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const loginThunk = loginUser({ email: 'login@test', password: 'test' });
      await loginThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
    });

    it('should initially dispatch action of type pending with no payload', async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const loginThunk = loginUser({
        email: 'login@test',
        password: 'test',
      });
      await loginThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls[0][0].type).toEqual('user/loginUser/pending');
      expect(calls[0][0].payload).toBeUndefined();
    });

    it("should dispatch action of type fulfilled with user's data as payload", async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const loginThunk = loginUser({
        email: 'login@test',
        password: 'test',
      });
      await loginThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls[1][0].type).toEqual('user/loginUser/fulfilled');

      const expectedLoginUserPayload = {
        uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
        firstname: 'Anakin',
        lastname: 'Skywalker',
        username: 'Mr_Vader',
        birthday: 'Wed Jul 31 1963',
        email: 'login@test',
        createdAt: 'Thu Jun 20 2002',
        avatarUrl:
          'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFydGglMjB2YWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      };
      expect(calls[1][0].payload).toEqual(expectedLoginUserPayload);
    });
  });

  describe('loginUser w/ mocked store', () => {
    it("should update user's status", async () => {
      const preloadedState: RootState = {
        user: { userData: null, status: 'idle' },
      };
      const store = setupStore(preloadedState);

      await store.dispatch(
        loginUser({ email: 'login@test', password: 'test' })
      );

      expect(store.getState().user.status).toBe('complete');
    });

    it("should update user's data", async () => {
      const preloadedState: RootState = {
        user: { userData: null, status: 'idle' },
      };
      const store = setupStore(preloadedState);

      await store.dispatch(
        loginUser({ email: 'login@test', password: 'test' })
      );

      const expectedUserDataAfterLogin = {
        uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
        firstname: 'Anakin',
        lastname: 'Skywalker',
        username: 'Mr_Vader',
        birthday: 'Wed Jul 31 1963',
        email: 'login@test',
        createdAt: 'Thu Jun 20 2002',
        avatarUrl:
          'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFydGglMjB2YWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      };
      expect(store.getState().user.userData).toEqual(
        expectedUserDataAfterLogin
      );
    });
  });

  describe('registerUser w/ mocked dispatch', () => {
    it('should dispatch two actions', async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const registerThunk = registerUser({
        email: 'register@test',
        password: 'test',
      });
      await registerThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
    });

    it('should initially dispatch action of type pending with no payload', async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const registerThunk = registerUser({
        email: 'register@test',
        password: 'test',
      });
      await registerThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls[0][0].type).toEqual('user/registerUser/pending');
      expect(calls[0][0].payload).toBeUndefined();
    });

    it("should dispatch action of type fulfilled with user's data as payload", async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        user: {
          status: 'idle',
          userData: null,
        },
      };

      const registerThunk = registerUser({
        email: 'register@test',
        password: 'test',
      });
      await registerThunk(dispatch, () => state, undefined);

      const { calls } = dispatch.mock;
      expect(calls[1][0].type).toEqual('user/registerUser/fulfilled');

      const expectedRegisterUserPayload = {
        uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
        firstname: 'Baby',
        lastname: 'Yoda',
        username: 'grogu',
        birthday: 'Mon Dec 31 1984',
        email: 'register@test',
        createdAt: 'Sun Aug 17 2003',
        avatarUrl:
          'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      };
      expect(calls[1][0].payload).toEqual(expectedRegisterUserPayload);
    });
  });

  describe('registerUser w/ mocked store', () => {
    it("should update user's status", async () => {
      const preloadedState: RootState = {
        user: { userData: null, status: 'idle' },
      };
      const store = setupStore(preloadedState);

      await store.dispatch(
        registerUser({ email: 'register@test', password: 'test' })
      );

      expect(store.getState().user.status).toBe('complete');
    });

    it("should update user's data", async () => {
      const preloadedState: RootState = {
        user: { userData: null, status: 'idle' },
      };
      const store = setupStore(preloadedState);

      await store.dispatch(
        registerUser({ email: 'register@test', password: 'test' })
      );

      const expectedUserDataAfterRegister = {
        uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
        firstname: 'Baby',
        lastname: 'Yoda',
        username: 'grogu',
        birthday: 'Mon Dec 31 1984',
        email: 'register@test',
        createdAt: 'Sun Aug 17 2003',
        avatarUrl:
          'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      };
      expect(store.getState().user.userData).toEqual(
        expectedUserDataAfterRegister
      );
    });
  });
});

describe('user selectors', () => {
  it("should return user's data", () => {
    const state: RootState = {
      user: {
        status: 'idle',
        userData: null,
      },
    };
    const userData = selectUser(state);

    expect(userData).toBeNull();
  });
  it("should return user's status", () => {
    const state: RootState = {
      user: {
        status: 'idle',
        userData: null,
      },
    };
    const userStatus = selectUserFetchStatus(state);

    expect(userStatus).toBe('idle');
  });
});
