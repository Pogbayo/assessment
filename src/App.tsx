// import Advert from "./components/ad";
// import Navbar from "./components/nav";
// import "./index.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Attraction {
//   id: string;
//   name: string;
//   description: string;
//   image_url: string;
// }
// const App: React.FC = () => {
// const [data, setData] = useState<Attraction[]>([]);
// const [loading, setLoading] = useState<boolean>(true);
// const [error, setError] = useState<string | null>(null);

// useEffect(() => {
//   const fetchData = async () => {
//     const options = {
//       method: "GET",
//       url: "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions",
//       params: {
//         id: "eyJ1ZmkiOi0yMDkyMTc0fQ==",
//         sortBy: "trending",
//         page: "1",
//         currency_code: "INR",
//         languagecode: "en-us",
//       },
//       headers: {
//         "x-rapidapi-key":
//           "6a947807d7msh064e0219a4af4b1p1e6f6ejsn803003b7afac",
//         "x-rapidapi-host": "booking-com15.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       console.log("Attraction API Response:", response.data);
//       setData(response.data);
//     } catch (err: any) {
//       console.error("Error fetching data:", err.message);
//       setError(err.message || "Failed to fetch data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);

//   // if (loading) return <div>Loading...</div>;
//   // if (error) return <div>Error: {error}</div>;
//   return (
//     <div className="bg-gray-100  mb-4 min-h-screen">
//       <Navbar />
//       <Advert />
//     </div>
//   );
// };

// export default App;

// {
//     "rewrites": [
//       { "source": "/(.*)", "destination": "/index.html" }
//     ]
//   }

import Navbar from "./components/nav";
import Advert from "./components/ad";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 mb-4 min-h-screen">
      <Navbar />
      <Advert searchQuery={""} />
    </div>
  );
};

export default App;
