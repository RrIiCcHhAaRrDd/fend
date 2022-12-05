import { handleSubmit } from './js/formHandler'
import { polarity } from './js/changePolarity'
import { postData } from './js/postRequest'
import { getAPIfn } from './js/getAPI'
import { updateUIfn } from './js/updateUI'
import { toggleFieldfn } from './js/toggleField'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


const path = require('path')
require('dotenv').config


export {  
    handleSubmit,
    polarity,
    postData,
    getAPIfn,
    updateUIfn,
    toggleFieldfn
    

}