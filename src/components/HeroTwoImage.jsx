// import heroTwoImage from "./assets/images/heroTwoImage.png";
// import heroTwoImage from "./assets/images/heroTwoImage.png";

// const HeroTwoImage = () => {
//   return (
//     <div>
//       <img
//         src=""
//         alt="heroTwo"
//         style={{
//           backgroundImage: `url(${heroTwoImage})`,
//         }}
//       />
//     </div>
//   );
// };

// export default HeroTwoImage;

import heroTwoImage from "/src/assets/images/heroTwoImage.png";

const HeroTwoImage = () => {
  return (
    <div>
      <img src={heroTwoImage} alt="heroTwo" />
    </div>
  );
};

export default HeroTwoImage;
