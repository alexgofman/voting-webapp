const User = require('../../models/user');
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };

module.exports = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and pw, call done with user
  // if it is correct email and pw
  // otherwise call done with false

  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    // compare passwords - is 'password' equal to user.password?

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});
