const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const profile = {
        name: '안광현',
        intro: '안녕하세요. 정보통신공학과 2-A 안광현입니다.',
        major: '정보통신공학과',
        hobby: '운동, 게임',
        favorite: '축구'
    };

    res.render('index', { profile: profile });
});

app.listen(3000, () => {
    console.log('서버가 실행되었습니다.');
});
