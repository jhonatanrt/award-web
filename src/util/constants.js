const API = 'http://api-award.us-east-2.elasticbeanstalk.com';
const API_HOST = `${API}/api`;
const S3_BUCKET = ``;

export default {
    API,
    API_HOST,
    URL_APIS: {
        CATEGORY: '/award/category',
        ASSIGNMENT: '/award/user/assignment',
        SAVE: '/award/request/save',
    },
    SPONSOR: [
        S3_BUCKET + '/banner-petpals.png',
    ],
    BENEFIT: [
        { name: 'Le da bienestar y mejora sus defensas' },
    ]
} 