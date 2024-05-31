// interface User {
//     id: string;
//     username: string;
//     password: string;
// }

// export async function authenticateUser(username: string, password: string): Promise<boolean> {
//     try {
//         const response = await fetch('http://localhost:8080/api/user/');
//         const users: User[] = await response.json();

//         const user = users.find(
//             (user: User) => user.username === username && user.password === password
//         );

//         if (user) {
//             // Save login state and username in cookies
//             localStorage.setItem('isLogin', 'true'); // Expires in 1 day
//             localStorage.setItem('username', user.username,); // Store username
//             return true; // Authentication successful
//         } else {
//             return false; // Authentication failed
//         }
//     } catch (err) {
//         console.error("An error occurred while logging in:", err);
//         return false; // Authentication failed due to error
//     }
// }
