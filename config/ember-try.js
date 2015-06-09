module.exports = {
  scenarios: [
    {
      name: 'ember-data-beta.18',
      dependencies: {
        'ember-data': '1.0.0-beta.18'
      },
      resolutions: {
        'ember-data': '1.0.0-beta.18'
      }
    },
    {
      name: 'ember-data-beta.19',
      dependencies: {
        'ember-data': '1.0.0-beta.19'
      },
      resolutions: {
        'ember-data': '1.0.0-beta.19'
      }
    },
    {
      name: 'ember-data-canary',
      dependencies: {
        'ember-data': 'components/ember-data#canary'
      },
      resolutions: {
        'ember-data': 'canary'
      }
    }
  ]
};
