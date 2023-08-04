// import { Box } from '@mui/material';
// import { useEffect, useState } from 'react';


// export default function Mongodatabase() {
//     const [inquiry, setInquiry] = useState([]);

//     useEffect(() => {
//         fetch('/api/contacts', {
//             method: 'GET'
//         }).then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//             .then((data) => setInquiry(data))
//             .catch((error) => console.error('Error:', error));
//     }, []);

//     return (
//         <Box sx={{ height: '500px', width: '500px', background: 'aqua' }}>
//             {inquiry.map((val: { _id: string, name: string }) => (
//                 <ul key={val._id}>
//                     <li>{val.name}</li>
//                 </ul>))
//             }
//         </Box>
//     );
// };