import dog from '../assets/images/dog.jpg'


const mockData = {
    lostItems: [
        { id: 1, title: '강아지 찾아요.', reward: '10,000', image : dog, category: '전자기기', date: new Date().getTime() },
        { id: 2, title: '고양이 찾아요.', reward: '50,000', image : '', category: '지갑', date: new Date().getTime() - 86400000 },
        { id: 3, title: '앵무새 찾아요.', reward: '10,000', image: 'https://example.com/parrot.jpg', category: '쇼핑백', date: new Date().getTime() - 172800000 },
        { id: 4, title: '알파카 찾아요.', reward: '10,000', image: 'https://example.com/alpaca.jpg', category: '금융자산', date: new Date().getTime() - 259200000 },
        { id: 5, title: '여우 찾아요.', reward: '10,000', image: 'https://example.com/fox.jpg', category: '도서', date: new Date().getTime() - 345600000 },
        { id: 6, title: '미어캣 찾아요.', reward: '10,000', image: 'https://example.com/meerkat.jpg', category: '쇼핑백', date: new Date().getTime() - 432000000 },
    ],
    foundItems: [
        { id: 1, title: '지갑 봤어요.', reward: '10,000', image: 'https://example.com/wallet.jpg', category: '금융자산', date: new Date().getTime() },
        { id: 2, title: '열쇠 봤어요.', reward: '5,000', image: 'https://example.com/keys.jpg', category: '도서', date: new Date().getTime() - 86400000 },
    ],
};

    export default mockData;
