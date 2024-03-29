const Hospital = require("../models/Hospital")
const jwt = require("jsonwebtoken")

const maxAge = 5 * 24 * 60 * 60;


const createJWT = (id) => {
    return jwt.sign({ id }, "somekey", {
        expiresIn: maxAge
    })
}

const alertError = (err) => {
    let errors = { name: '', email: '', password: '' }

    if (err.message === 'incorrect email') {
        errors.email = 'This email not found';
    }
    if (err.message === 'incorrect pwd') {
        errors.password = 'The password is incorrect';
    }
    if (err.code === 11000) {
        errors.email = 'This email already registered';
        return errors;
    }
    if (err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}


module.exports.signin = async (req, res) => {

    const { password, email } = req.body;

    try {
        const hospital = await Hospital.login(email, password);

        const token = createJWT(hospital._id)

        res.cookie("jwt", token, { maxAge: maxAge * 1000 })
        res.status(201).send({ hospital })
    }
    catch (err) {

        let errors = alertError(err)
        res.status(400).send({ errors })
    }


}

module.exports.logout = async (req, res) => {
    console.log("logout")
    res.cookie('jwt', "", { maxAge: 1 })
    res.status(200).json({ logout: true })

}

module.exports.signup = async (req, res) => {


    try {
        console.log(req.body)
        const distance = 0;
        const { name, password, email, pincode, city, state, lat, long, address, phone } = req.body;

        const newHospital = await Hospital.create({ name, password, email, city, pincode, state, lat, long, distance, address, phone })


        const token = createJWT(newHospital._id)
        res.cookie("jwt", token, { maxAge: maxAge * 1000 })


        res.status(201).send({ hospital: newHospital })
    }
    catch (err) {

        let errors = alertError(err)

        res.status(400).json({ errors })
    }



}
