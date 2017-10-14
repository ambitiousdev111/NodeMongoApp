// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '198849700658030', // your App ID
        'clientSecret'    : '5e36e9dca0e41e56362c17e85f479be5', // your App Secret
        'callbackURL'     : 'https://learningapp-dev.herokuapp.com/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.10/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'https://learningapp-dev.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '693095659675-htv4tvtpe7erg8f3qro4g7f0054ljtlf.apps.googleusercontent.com',
        'clientSecret'     : 'qIQKEgPnu5dS1iMU68q93fMA',
        'callbackURL'      : 'https://learningapp-dev.herokuapp.com/auth/google/callback'
        // reference: https://console.developers.google.com/apis/api/plus.googleapis.com/overview?project=693095659675
    }

};
