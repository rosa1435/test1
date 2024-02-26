import express from 'express';
import member from '../schemas/products.schema.js'

const router = express.Router();


// 회원작성 API (DB에 등록하기위해서 만들었습니다.)
router.post('/products', async (req, res) => {
    const {name, email, pw} = req.body;

    const newmenber = new member({ // 새 회원 등록
        name,
        email,
        pw,
    });

    const savedMenber = await newmenber.save();

    res.status(201).json({ message: "등록하였습니다." });
});


// 회원목록 조회 API
router.get('/products', async (req, res) => {
    const members = await member.find().exec();
    // 회원 정보를 직접 배열로 반환합니다.
    const modifiedMembers = members.map(member => ({
        userid: member._id, // "_id"를 "userId"로 매핑
        name: member.name,
        email: member.email,
        pw: member.pw,
    }));
    res.status(200).json(modifiedMembers); // JSON Object 배열로 응답
});

// 회원 상세조회 API
router.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const oneMember = await member.findById(productId).exec();

    const modifiedMember = {
        userid: oneMember._id, // "_id"를 "userId"로 매핑
        name: oneMember.name,
        email: oneMember.email,
        pw: oneMember.pw,
    };

    res.status(200).json(modifiedMember); // JSON Object로 응답
});


export default router;