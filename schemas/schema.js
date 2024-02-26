import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: { // 회원이름
    type: String,
    required: true, // required는 필수인지 아닌지입니다.
  },
  email: { // 이메일
    type: String,
    required: true
  },
  password: { // 비밀번호
    type: String,
    required: true,
  }
});


export default mongoose.model('memberlist', memberSchema);