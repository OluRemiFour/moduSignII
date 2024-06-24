// import React, { useState, useRef, useEffect } from "react";
// import * as tmImage from "@teachablemachine/image";
// import "@tensorflow/tfjs";

// const SignLanguageTranslator = () => {
//   const [model, setModel] = useState(null);
//   const [maxPredictions, setMaxPredictions] = useState(0);
//   const [predictionText, setPredictionText] = useState("");
//   const [isInitialized, setIsInitialized] = useState(false);
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const URL = "https://teachablemachine.withgoogle.com/models/aCZ1zNZim/";
//   const predictionThreshold = 0.9;

//   useEffect(() => {
//     const loadModel = async () => {
//       try {
//         const modelURL = URL + "model.json";
//         const metadataURL = URL + "metadata.json";
//         const loadedModel = await tmImage.load(modelURL, metadataURL);
//         setModel(loadedModel);
//         setMaxPredictions(loadedModel.getTotalClasses());
//       } catch (error) {
//         console.error("Failed to load model:", error);
//       }
//     };

//     if (!model) {
//       loadModel();
//     }
//   }, [model]);

//   useEffect(() => {
//     if (isInitialized && model && !webcamRef.current) {
//       const initWebcam = async () => {
//         try {
//           const webcam = new tmImage.Webcam(640, 480, true); 
//           await webcam.setup();
//           await webcam.play();
//           webcamRef.current = webcam;
//           canvasRef.current.appendChild(webcam.canvas);
//           webcam.canvas.width = 640;
//           webcam.canvas.height = 480; 
//           requestAnimationFrame(loop);
//         } catch (error) {
//           console.error("Failed to initialize webcam:", error);
//         }
//       };

//       initWebcam();
//     }

//     return () => {
//       if (webcamRef.current) {
//         webcamRef.current.stop();
//       }
//     };
//   }, [isInitialized, model]);

//   const loop = async () => {
//     if (webcamRef.current && model) {
//       webcamRef.current.update();
//       await predict();
//       requestAnimationFrame(loop);
//     }
//   };

//   const predict = async () => {
//     const predictions = await model.predict(webcamRef.current.canvas);
//     let highestPrediction = { className: "", probability: 0 };

//     predictions.forEach((prediction) => {
//       if (prediction.probability > highestPrediction.probability) {
//         highestPrediction = prediction;
//       }
//     });

//     if (highestPrediction.probability >= predictionThreshold) {
//       setPredictionText(
//         `${highestPrediction.className}: ${highestPrediction.probability.toFixed(2)}`,
//       );
//     } else {
//       setPredictionText("User");
//     }
//   };

//   const handleStartClick = () => {
//     setIsInitialized(true);
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         width: "100vw",
//         height: "100vh",
//         color: "white",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
      
//       }}
//     >
//       <div style={{ fontSize: "xx-large" }}>Sign Language Translator</div>
//       {!isInitialized && (
//         <button
//           style={{
//             width: "15%",
//             height: "40px",
//             backgroundColor: "rgb(43, 43, 164)",
//             color: "white",
//             fontSize: "x-large",
//             fontWeight: "bolder",
//             border: "none",
//             borderRadius: "5px",
//           }}
//           onClick={handleStartClick}
//         >
//           Start
//         </button>
//       )}
//       <div
//         id="webcam-container"
//         style={{
//           position: "relative",
//           display: "inline-block",
//           width: "640px", 
//           marginBottom: "5%",
//           borderRadius: "20px"
//         }}
//       >
//         <div ref={canvasRef} />
//         <div
//           id="prediction-text"
//           style={{
//             fontSize: "30px",
//             fontWeight: "bolder",
//             bottom: "10px",
//             left: "10px",
//             background: "#7b4ff6",
//             color: "white",
//             padding: "5px",
//             borderRadius: "3px",
//             display: predictionText ? "block" : "none",
//           }}
//         >
//           {predictionText}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignLanguageTranslator;


import React, { useState, useRef, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import "@tensorflow/tfjs";

const SignLanguageTranslator = () => {
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [predictionText, setPredictionText] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const URL = "https://teachablemachine.withgoogle.com/models/panUi7dTt/";
  const predictionThreshold = 0.9;

  useEffect(() => {
    const loadModel = async () => {
      try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        setMaxPredictions(loadedModel.getTotalClasses());
      } catch (error) {
        console.error("Failed to load model:", error);
      }
    };

    if (!model) {
      loadModel();
    }
  }, [model]);

  useEffect(() => {
    if (isInitialized && model && !webcamRef.current) {
      const initWebcam = async () => {
        try {
          const webcam = new tmImage.Webcam(640, 480, true);
          await webcam.setup();
          webcamRef.current = webcam;
          canvasRef.current.appendChild(webcam.canvas);
          webcam.canvas.width = 640;
          webcam.canvas.height = 480;
          await webcam.play();
          requestAnimationFrame(loop);
        } catch (error) {
          console.error("Failed to initialize webcam:", error);
        }
      };

      initWebcam();
    }

    return () => {
      if (webcamRef.current) {
        webcamRef.current.stop();
      }
    };
  }, [isInitialized, model]);

  const loop = async () => {
    if (webcamRef.current && model) {
      webcamRef.current.update();
      await predict();
      requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    const predictions = await model.predict(webcamRef.current.canvas);
    let highestPrediction = { className: "", probability: 0 };

    predictions.forEach((prediction) => {
      if (prediction.probability > highestPrediction.probability) {
        highestPrediction = prediction;
      }
    });

    if (highestPrediction.probability >= predictionThreshold) {
      setPredictionText(
        ${highestPrediction.className}: ${highestPrediction.probability.toFixed(2)},
      );
    } else {
      setPredictionText("User");
    }
  };

  const handleStartClick = () => {
    setIsInitialized(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "xx-large" }}>Sign Language Translator</div>
      {!isInitialized && (
        <button
          style={{
            width: "15%",
            height: "40px",
            backgroundColor: "rgb(43, 43, 164)",
            color: "white",
            fontSize: "x-large",
            fontWeight: "bolder",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={handleStartClick}
        >
          Start
        </button>
      )}
      <div
        id="webcam-container"
        style={{
          position: "relative",
          display: "inline-block",
          width: "640px",
          marginBottom: "5%",
          borderRadius: "20px",
        }}
      >
        <div ref={canvasRef} />
        <div
          id="prediction-text"
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            bottom: "10px",
            left: "10px",
            background: "#7b4ff6",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            display: predictionText ? "block" : "none",
          }}
        >
          {predictionText}
        </div>
      </div>
    </div>
  );
};

export default SignLanguageTranslator;