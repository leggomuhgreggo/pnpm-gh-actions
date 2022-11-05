module.exports = {
  displayName: 'test',
  resolver: '@nrwl/jest/plugins/resolver',

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '.svg': '@nrwl/expo/plugins/jest/svg-mock',
  },

  projects: [
    { preset: 'jest-expo/ios' },
    { preset: 'jest-expo/android' },
    {
      preset: 'jest-expo/web',
      // will only run for files with .web
      testMatch: [
        `**/__tests__/**/*spec.web.[jt]s?(x)`,
        `**/__tests__/**/*test.web.[jt]s?(x)`,
        `**/?(*.)+(spec|test).web.[jt]s?(x)`,
      ],
    },
  ],
  preset: 'react-native',
};
