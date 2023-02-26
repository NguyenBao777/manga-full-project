import { ReactNode } from 'react';
import {AiOutlineHome, AiOutlineUnorderedList} from 'react-icons/ai';
import {GiTrophiesShelf, GiCardRandom} from 'react-icons/gi';
import {MdFiberNew, MdBatteryChargingFull} from 'react-icons/md';

interface menuItemsType {
    name: string;
    icon: ReactNode;
    path: string;
    children: {name: string, path: string}[];
}
const menuItems: menuItemsType[] = [
    {
        name: 'Trang Chủ',
        icon: <AiOutlineHome className='text-2xl'/>,
        path: '/',
        children: []
    },
    {
        name: 'Thể Loại',
        icon: <AiOutlineUnorderedList className='text-2xl'/>,
        path: '/category',
        children: [{
            name: 'Action',
            path: '/category/action'
        },{
            name: 'Acventure',
            path: '/category/acventure'
        }]
    },
    {
        name: 'Xếp Hạng',
        icon: <GiTrophiesShelf className='text-2xl'/>,
        path: '/rank',
        children: [{
            name: 'Top Ngày',
            path: '/rank/date'
        },{
            name: 'Top Tuần',
            path: '/rank/week'
        },{
            name: 'Top Tháng',
            path: '/rank/month'
        }]
    },
    {
        name: 'Truyện Mới',
        icon: <MdFiberNew className='text-2xl'/>,
        path: '/new',
        children: []
    },
    {
        name: 'Truyện Full',
        icon: <MdBatteryChargingFull className='text-2xl'/>,
        path: '/new',
        children: []
    },
    {
        name: 'Truyện Ngẫu nhiên',
        icon: <GiCardRandom className='text-2xl'/>,
        path: '/new',
        children: []
    }
];

export interface dataSlidesType{
    name: string;
    imageUrl: string;
    desc: string;
    link: string;
}

const dataSlides: dataSlidesType[] = [
    {
        name: 'Saika Kawakita',
        imageUrl: 'https://javpornpics.com/dmm/saika-kawakita/sivr00191/saika-kawakita-10.jpg',
        desc: 'Kawakita Saika là một nữ diễn viên khiêu dâm người Nhật Bản. Cô đến từ Chiba. Cô thuộc về công ti Cruise Group. Ngày/nơi sinh: 24 tháng 4, 1999 (23 tuổi).',
        link: 'https://www.google.com/search?q=saika+kawakita&rlz=1C1CHWL_enVN1010VN1010&sxsrf=AJOqlzWjbJQ4pdYZ7jZQQhVsqyAnDaEq8Q:1677399475622&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjv7o__37L9AhVMCIgKHe-cD50Q_AUoAXoECAIQAw&biw=1280&bih=609&dpr=1.5#imgrc=w0mCXQdoF_1QgM',
    },
    {
        name: 'Yua Mikami',
        imageUrl: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2017/09/22/20170922-030016_U3927_M327420_1224.png?itok=1egBsMG_',
        desc: 'Kitō Momona, thường được biết đến với nghệ danh Mikami Yua là một nữ diễn viên phim khiêu dâm và là thần tượng Nhật Bản, cựu thành viên SKE48, hiện là thành viên của nhóm nhạc Ebisu Muscats. Đồng thời, cô đang là thành viên của nhóm nhạc K-pop Honey Popcorn. Ngày/nơi sinh: 16 tháng 8, 1993 (29 tuổi).',
        link: 'https://www.google.com/search?q=yua+mikami&rlz=1C1CHWL_enVN1010VN1010&oq=yua+mikami&aqs=chrome..69i57.2951j0j1&sourceid=chrome&ie=UTF-8',
    },
    {
        name: 'Remu Suzumori',
        imageUrl: 'https://javhd.pics/dmm/remu-suzumori/118abp00968/remu-suzumori-7.jpg',
        desc: 'Kidonche Suzumori Remu là một nữ giám đốc và nữ cầu thủ Nhật Bản. Cô thuộc về công ti T-Powers. Ngày/nơi sinh: 3 tháng 12, 1997 (25 tuổi).',
        link: 'https://www.google.com/search?q=remu+suzumori+800x533&tbm=isch&ved=2ahUKEwiE_vf_4bL9AhXDB94KHcX7DQIQ2-cCegQIABAA&oq=remu+suzumori+800x533&gs_lcp=CgNpbWcQA1DzFFjSQGCqRGgCcAB4AIABeYgBrAySAQQxNS4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=zhf7Y4TfC8OP-AbF97cQ&bih=609&biw=1280&rlz=1C1CHWL_enVN1010VN1010#imgrc=8Aj_yGfFrIfFgM&imgdii=7D5Q69fdjinkIM',
    },
    {
        name: 'Momo Sakura',
        imageUrl: 'https://pics.dmm.co.jp/digital/video/ipx00213/ipx00213jp-3.jpg',
        desc: 'Sakura Momo là một nữ diễn viên khiêu dâm người Nhật Bản. Cô từng là một thần tượng áo tắm. Cô thuộc về công ti T-Powers. Ngày/nơi sinh: 3 tháng 12, 1996 (26 tuổi).',
        link: 'https://www.google.com/search?q=momo+sakura+800x533&tbm=isch&ved=2ahUKEwirgtW54rL9AhWPZt4KHcIRC3sQ2-cCegQIABAA&oq=momo+sakura+800x533&gs_lcp=CgNpbWcQA1CtLFjoR2DnTGgHcAB4BIABcogBnwySAQQxNS4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Rxj7Y-vCD4_N-QbCo6zYBw&bih=609&biw=1280&rlz=1C1CHWL_enVN1010VN1010#imgrc=FHfBJIZFe8gp3M&imgdii=OBsv5HD8JpZAlM',
    },
    {
        name: 'Rina Ishihara',
        imageUrl: 'https://redbust.com/stuff/rina-ishihara-taking-a-bath/rina-ishihara-asian-naked-bath-graphis-12-800x533.jpg',
        desc: 'Rina Ishihara là một nữ diễn viên khiêu dâm người Nhật Bản. Cô từng là một thần tượng áo tắm. Cô thuộc về công ti T-Powers. Ngày/nơi sinh: 29 tháng 8, 1987 (35 tuổi).',
        link: 'https://www.google.com/search?q=rina+ishihara+800x533&tbm=isch&ved=2ahUKEwj7tv7d47L9AhWI6mEKHWhiDW4Q2-cCegQIABAA&oq=rina+ishihara+800x533&gs_lcp=CgNpbWcQA1CrC1i5KWCRK2gGcAB4AoABe4gBmw2SAQQxNi4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=nxn7Y7vrNIjVhwPoxLXwBg&bih=609&biw=1280&rlz=1C1CHWL_enVN1010VN1010#imgrc=0b9PZufjEPZozM',
    },
   
]

export {menuItems, dataSlides}