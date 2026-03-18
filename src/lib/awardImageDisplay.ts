const STRAIGHT_FRAME_IMAGES = new Set([
  'Felicitation on a special occasion from my Ph.D. Guide, Dr. G. L. Gulhane.png',
  'CONFERENCE ON NEP, ORGANIZED AT D Y PATIL, PIMPRI.png',
  'ACADEMIC MOU WITH PIBm, PUNE.png',
  'London Book of World Record.png',
  'BEST Paper Award at YCMOU.png',
  'VYAPAR JAGAT AWARD.png',
  'VYAPAR JAGAT AWARD2.png',
  'THE GURU 2021.png',
]);

const COVER_FRAME_IMAGES = new Set([
  'London Book of World Record.png',
]);

const FULL_RECTANGLE_IMAGES = new Set([
  'FELICITATION AS A GUEST SPEAKER AT MGM UNIVERSITY.png',
]);

export function isStraightFrameImage(fileName: string): boolean {
  return STRAIGHT_FRAME_IMAGES.has(fileName);
}

export function getAwardImageClass(fileName: string): string {
  if (FULL_RECTANGLE_IMAGES.has(fileName)) {
    return 'block w-full h-full object-cover object-center';
  }

  if (COVER_FRAME_IMAGES.has(fileName)) {
    return 'block w-full h-56 object-cover object-center';
  }

  return 'block w-full h-auto object-contain';
}
