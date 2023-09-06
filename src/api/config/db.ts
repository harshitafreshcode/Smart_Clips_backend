import { connect } from "mongoose";
require('dotenv').config()
import { env } from '../../infrastructure/env'

function connects() {
    return connect("mongodb://localhost:27017/smart_clips")
        .then(() => {
            console.log('Connected to MongoDB Successfully');

        }).catch((e) => console.log(e)
        )
}

export default connects