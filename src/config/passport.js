import passport from 'passport';
import User from '../models/user.model';

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "77556486466-ufcbq2kus0tf7m297fmsn8vclej2cp3h.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/api/v1/users/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      let user = await User.findOne({ email: profile.emails[0].value });

      if (!user) {
        user = await User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          role: 'patient'
        });
      }

      done(null, user); // Pass the user object to done() to complete authentication
    } catch (error) {
      done(error);
    }
  }
));

// Serialize user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
