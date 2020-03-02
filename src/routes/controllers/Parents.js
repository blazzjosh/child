import parent from '../../../models/parents'


export async function post(req, res) {

    try {
        const firstName = req.body.parent.firstName
        const lastName = req.body.parent.lastName
        const address = req.body.parent.address
        const phone = req.body.parent.phone

        parent.create({
            firstName,
            lastName,
            address,
            phone
        })


    } catch (error) {
        res.redirect('/register');
        console.log(error)
    }


}