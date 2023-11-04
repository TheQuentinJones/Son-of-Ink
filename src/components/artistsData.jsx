// artistsData.jsx is a file that contains an array of objects. Each object represents an artist and contains the following properties:

// Define an array of artist objects
const artistsData = [
  {
    name: 'Theron',
    imageUrl: '/Assets/Theron.png', // Image URL for Theron's profile picture
    bio: "I'm Artist 1. Ut commodo pharetra nisi a egestas...", // Biography of Theron
    galleryImages: [
      { url: '/Assets/gallery_bg.png' }, // Image URL for Theron's gallery image 1
      { url: '/Assets/gallery_bg.png' },
      { url: '/Assets/gallery_bg.png' },
      { url: '/Assets/gallery_bg.png' },
      // ... add more images for Theron's gallery
    ],
  },
  {
    name: 'Jonny',
    imageUrl: '/Assets/Johnny.png', // Image URL for Jonny's profile picture
    bio: "I'm Artist 2. Ut commodo pharetra nisi a egestas...", // Biography of Jonny
    galleryImages: [
      // ... add more images for Jonny's gallery
    ],
  },
  // ... add more artists with their data
];

// Export the array of artist data for use in other parts of your application
export default artistsData;
