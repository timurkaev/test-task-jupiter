import image1 from '../assets/images/Bitmap-8.png';
import image2 from '../assets/images/Bitmap.png';
import image3 from '../assets/images/Bitmap-1.png';
import image4 from '../assets/images/Bitmap-2.png';
import image5 from '../assets/images/Bitmap-3.png';
import image6 from '../assets/images/Bitmap-4.png';
import image7 from '../assets/images/Bitmap-5.png';
import image8 from '../assets/images/Bitmap-6.png';
import image9 from '../assets/images/Bitmap-7.png';

export type DataType = {
  id: number;
  img: string;
  category: string;
  title: string;
};

export const data: DataType[] = [
  { id: 1, img: image1, category: 'Design', title: 'SOFA' },
  { id: 2, img: image2, category: 'Branding', title: 'KeyBoard' },
  { id: 3, img: image3, category: 'Illustration', title: 'Work Media' },
  { id: 4, img: image4, category: 'Motion', title: 'DDDone' },
  { id: 5, img: image5, category: 'Design', title: 'Abstract' },
  { id: 6, img: image6, category: 'Branding', title: 'HandP' },
  { id: 7, img: image7, category: 'Motion', title: 'Architect' },
  { id: 8, img: image8, category: 'Design', title: 'Calc' },
  { id: 9, img: image9, category: 'Branding', title: 'Sport' },

  { id: 10, img: image1, category: 'Design', title: 'SOFA 2' },
  { id: 11, img: image2, category: 'Branding', title: 'KeyBoard 2' },
  { id: 12, img: image3, category: 'Illustration', title: 'Work Media 2' },
  { id: 13, img: image4, category: 'Motion', title: 'DDDone 2' },
  { id: 14, img: image5, category: 'Design', title: 'Abstract 2' },
  { id: 15, img: image6, category: 'Branding', title: 'HandP 2' },
  { id: 16, img: image7, category: 'Motion', title: 'Architect 2' },
  { id: 17, img: image8, category: 'Design', title: 'Calc 2' },
  { id: 18, img: image9, category: 'Branding', title: 'Sport 2' },
];
