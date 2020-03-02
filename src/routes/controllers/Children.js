import child from '../../../models/children'


export async function post(req, res) {

    try {
        const firstName = req.body.child.firstName
        const lastName = req.body.child.lastName
        const parentid = req.body.child.parentid


        child.create({
            firstName,
            lastName,
            parentid,
        })


    } catch (error) {
        res.redirect('/register');
        console.log(error)
    }


}