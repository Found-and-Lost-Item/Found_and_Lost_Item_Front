import dog from '../assets/images/dog.jpg';
import profile from '../assets/images/profile.jpg';

const mockData = {
    lostItems: [
        {
            id: 1,
            lostTitle: '강아지 찾아요.',
            lostAward: '10,000',
            lostImageUrl: profile,
            lostCategory: '전자기기',
            lostDate: '2024-08-18',
            lostLatitude: '1',
            lostLongitude: '1',
            lostContent: '알파카가 갑자기 뛰쳐나갔어요.'
        },
        {
            id: 2,
            lostTitle: '고양이 찾아요.',
            lostAward: '50,000',
            lostImageUrl: dog,
            lostCategory: '지갑',
            lostDate: '2024-08-17',
            lostLatitude: '2',
            lostLongitude: '2',
            lostContent: '고양이가 갑자기 사라졌어요.'
        },
        {
            id: 3,
            lostTitle: '앵무새 찾아요.',
            lostAward: '10,000',
            lostImageUrl: dog,
            lostCategory: '전자기기',
            lostDate: '2024-08-16',
            lostLatitude: '3',
            lostLongitude: '3',
            lostContent: '앵무새가 도망갔어요.'
        },
        {
            id: 4,
            lostTitle: '알파카 찾아요.',
            lostAward: '10,000',
            lostImageUrl: null,  // 이미지가 없는 경우
            lostCategory: '전자기기',
            lostDate: '2024-08-15',
            lostLatitude: '4',
            lostLongitude: '4',
            lostContent: '알파카를 찾고 있어요.'
        },
        {
            id: 5,
            lostTitle: '여우 찾아요.',
            lostAward: '10,000',
            lostImageUrl: null,
            lostCategory: '도서',
            lostDate: '2024-08-14',
            lostLatitude: '5',
            lostLongitude: '5',
            lostContent: '여우가 도망갔어요.'
        },
        {
            id: 6,
            lostTitle: '미어캣 찾아요.',
            lostAward: '10,000',
            lostImageUrl: null,
            lostCategory: '쇼핑백',
            lostDate: '2024-08-13',
            lostLatitude: '6',
            lostLongitude: '6',
            lostContent: '미어캣을 찾습니다.'
        },
    ],
    foundItems: [
        {
            id: 1,
            foundTitle: '지갑 봤어요.',
            foundAward: '10,000',
            foundImageUrl: dog,
            foundCategory: '금융자산',
            foundDate: '2024-08-18',
            foundLatitude: '1',
            foundLongitude: '1',
            foundContent: '지갑을 발견했습니다.'
        },
        {
            id: 2,
            foundTitle: '열쇠 봤어요.',
            foundAward: '5,000',
            foundImageUrl: null,
            foundCategory: '도서',
            foundDate: '2024-08-17',
            foundLatitude: '2',
            foundLongitude: '2',
            foundContent: '열쇠를 발견했습니다.'
        },
    ],
    users: [
        { username: '123', password: '123', name: '테스트 유저' },
    ],
};

export default mockData;
