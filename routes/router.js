import express from 'express';
import memberlist from '../schemas/products.schema.js'

const router = express.Router();


// 회원작성 API
router.post('/products', async (req, res) => {
    const {name, email, password} = req.body;

    const newmenber = new member({ // 새 상품 등록
        name,
        email,
        password,
    });

    const savedMenber = await newmenber.save();

    res.status(201).json({ message: "등록하였습니다." });
});


// 회원목록 조회 API
router.get('/products', async (req, res) => {
    const menbers = await member.find().exec();
    return res.status(200).json({ menbers });
});

// 회원 상세조회 API
router.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    const onemenber = await member.findById(productId).exec();




    return res.status(200).json(onemenber);
});
export default router;