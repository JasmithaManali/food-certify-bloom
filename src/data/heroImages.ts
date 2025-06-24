export interface HeroImage {
  src: string;
  title: string;
  description: string;
}

export const heroImages: HeroImage[] = [
  { src: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg', title: 'Unavar Food Inspection', description: 'Ensuring quality and safety from farm to table.' },
  { src: 'https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg', title: 'Food Safety Certification', description: 'Comprehensive certification for food processing and handling.' },
  { src: 'https://media.istockphoto.com/id/690781600/photo/hands-on-on-the-factory-floor.jpg?s=1024x1024&w=is&k=20&c=sVT-RTYIia-zios1vs44UGbuof_h77KORekiqr75lYQ=', title: 'Quality Management Systems', description: 'Implementing ISO standards for operational excellence.' },
];