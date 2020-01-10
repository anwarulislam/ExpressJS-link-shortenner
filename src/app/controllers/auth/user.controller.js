import User from '../../models/User'

const login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })

    if (user) {
        try {
            console.log(user.validPassword(req.body.password))
            if (user.validPassword(req.body.password)) {
                req.flash('success_msg', 'You have logged in successfully!!')
                req.session.user = {
                    username: user.username,
                    name: user.name,
                    email: user.email || null,
                }

                console.log('hello peyechi');
                res.redirect('back')
            } else {
                req.flash('errors', 'Your password is wrong!!')
            }

        } catch (error) {
            console.log(error)
        }


        // req.check('password', 'Your password is wrong').custom(() => false)
    } else {

        //No user found
    }

}
var facebook, google, twitter, github
facebook = google = twitter = github = (accessToken, refreshToken, profile, done) => {

    User.findOne({ oauthID: profile.id }, function (err, user) {
        if (err) {
            console.log(err);  // handle errors!
        }
        if (!err && user !== null) {
            done(null, user);
        } else {

            // const verifiedEmail = profile.emails.find(email => email.verified) || profile.emails[0]

            user = new User({
                oauthID: profile.id,
                name: profile.displayName
            });
            user.save(function (err) {
                if (err) {
                    console.log(err)  // handle errors!
                } else {
                    console.log("saving user ...")
                    done(null, user)
                }
            })
        }
    })
}

export default { login, facebook, github, google, twitter }