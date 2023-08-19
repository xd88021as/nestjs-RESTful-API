const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'api',
        'app',
        'app-patient',
        'backend',
        'deps',
        'deps-dev',
        'frontend',
        'shared',
        'web',
        'web-admin',
        'web-pharmacist',
        'web-practitioner',
        'web-staff',
      ],
    ],
    'subject-full-stop': [2, 'never', '.'],
  },
};

module.exports = Configuration;
