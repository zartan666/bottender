import Joi from 'joi';

import schema from '../schema';

const config = {
  messenger: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
    verifyToken: '__PUT_YOUR_VERITY_TOKEN_HERE__',
    appId: '__PUT_YOUR_APP_ID_HERE__',
    appSecret: '__PUT_YOUR_APP_SECRET_HERE__',
    profile: {
      get_started: {
        payload: 'GET_STARTED',
      },
      persistent_menu: [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: 'postback',
              title: '__TITLE_HERE__',
              payload: '__PAYLOAD_HERE__',
            },
            {
              type: 'web_url',
              title: '__TITLE_HERE__',
              url: 'http://example.com',
              webview_height_ratio: 'tall',
            },
          ],
        },
      ],
      greeting: [
        {
          locale: 'default',
          text: 'Hello!',
        },
      ],
      whitelisted_domains: ['http://example.com'],
    },
  },
  line: {
    channelSecret: '__PUT_YOUR_CHANNEL_SECRET_HERE__',
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  telegram: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  slack: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  ngrok: true,
};

const nestedConfig = {
  messenger: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
    verifyToken: '__PUT_YOUR_VERITY_TOKEN_HERE__',
    appId: '__PUT_YOUR_APP_ID_HERE__',
    appSecret: '__PUT_YOUR_APP_SECRET_HERE__',
    profile: {
      get_started: {
        payload: 'GET_STARTED',
      },
      persistent_menu: [
        {
          locale: 'default',
          composer_input_disabled: true,
          call_to_actions: [
            {
              title: 'My Account',
              type: 'nested',
              call_to_actions: [
                {
                  title: 'Pay Bill',
                  type: 'postback',
                  payload: 'PAYBILL_PAYLOAD',
                },
                {
                  title: 'History',
                  type: 'postback',
                  payload: 'HISTORY_PAYLOAD',
                },
                {
                  title: 'Contact Info',
                  type: 'postback',
                  payload: 'CONTACT_INFO_PAYLOAD',
                },
              ],
            },
            {
              type: 'web_url',
              title: 'Latest News',
              url: 'http://petershats.parseapp.com/hat-news',
              webview_height_ratio: 'full',
            },
          ],
        },
        {
          locale: 'zh_CN',
          composer_input_disabled: false,
          call_to_actions: [
            {
              title: 'Pay Bill',
              type: 'postback',
              payload: 'PAYBILL_PAYLOAD',
            },
          ],
        },
      ],
      greeting: [
        {
          locale: 'default',
          text: 'Hello!',
        },
      ],
      whitelisted_domains: ['http://example.com'],
    },
  },
  line: {
    channelSecret: '__PUT_YOUR_CHANNEL_SECRET_HERE__',
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  telegram: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  slack: {
    accessToken: '__PUT_YOUR_ACCESS_TOKEN_HERE__',
  },
  ngrok: true,
};

it('should valid', () => {
  const validateResult = Joi.validate(config, schema);
  expect(validateResult.error).toBeNull();
});

it('should valid nested config', () => {
  const validateResult = Joi.validate(nestedConfig, schema);
  expect(validateResult.error).toBeNull();
});
