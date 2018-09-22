import axios from 'axios';
import md5 from 'blueimp-md5';
import './stylesheets/styles.scss';

let apikey = '5c49dbf430653fae9b7396e83ab14ec7';
let publicKey = '7bfeeefb99a89b8261f9768e07640b2a60c02889'
let ts = 'gustavoFreire2';
let hash = md5(ts+publicKey+apikey)
