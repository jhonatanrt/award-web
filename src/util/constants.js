<<<<<<< HEAD
//const API = 'http://localhost:8080';
const API = 'http://api-award.us-east-2.elasticbeanstalk.com'
=======
const API = 'http://api-award.us-east-2.elasticbeanstalk.com';
>>>>>>> 6815e21bbe6da0a5721806a4daf218c6fab08b89
const API_HOST = `${API}/api`;
const S3_BUCKET = ``;

export default {
    API,
    API_HOST,
    URL_APIS: {
        CATEGORY: '/award/category',
        ASSIGNMENT: '/award/v2/user/assignment',
        SAVE: '/award/request/save',
        PENDING: '/award/request/pending',
        APPROVE: '/award/response/approved',
        REJECT: '/award/response/disapprove',
        USER_FREE: '/award/user/',
    },
    SPONSOR: [
        S3_BUCKET + '/banner-petpals.png',
    ],
    BENEFIT: [
        { name: 'Le da bienestar y mejora sus defensas' },
    ]
} 