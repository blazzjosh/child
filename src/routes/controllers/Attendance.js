import attendance from '../../../models/attendance'


export async function post(req, res) {

    let data = req.body.record

    for (let i = 0; i < data.length; i++) {

        try {

            const parentid = data[i].parentid
            const childId = data[i].childId

            attendance.create({
                parentid,
                childId,
            })

        } catch (error) {
            res.redirect('/')
            console.log(error)

        }

    }

}