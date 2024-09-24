# Zoom Integration for Online Tutoring Platform

This section of the project integrates Zoom video conferencing into our online tutoring platform, allowing tutors and students to engage in live video sessions, screen sharing, and chat directly within the platform. The Zoom SDK codealong at [Next.js Video Conferencing App with Zoom Video SDK](https://developers.zoom.us/blog/nextjs-video-conferencing-app-using-the-zoom-video-sdk/), as well as the associated repo [Video SDK-NextJS Quickstart](https://github.com/zoom/VideoSDK-Nextjs-Quickstart/), were used as the base for this project.

## Features

- Real-time video, audio, and screen sharing using **Zoom Video SDK**.
- Secure video sessions authenticated with **JWT** (JSON Web Tokens).
- Dynamic session creation based on user input, allowing tutors and students to join the same room.

## Tools and Technologies

- **React**: Front-end framework for building the user interface
- **Next.js**: Framework for server-side rendering and routing
- **Zoom Video SDK**: Provides video conferencing, screen sharing, and chat features
- **JWT**: Used for secure authentication of Zoom sessions
- **Node.js**: Server-side environment for handling backend logic
- **jsrsasign**: Library for generating JWTs

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone git@github.com:melvingonzalezjr/tutoringplatform-zoom.git
   ```

2. **Install dependencies**:
   ```bash
   npm install @zoom/videosdk jsrsasign
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory:

     ```bash
     ZOOM_SDK_KEY="Your Zoom SDK Key"
     ZOOM_SDK_SECRET="Your Zoom SDK Secret"
     ```
    *Note: Creating a Zoom SDK Key and Secret is a bit tricky. Follow the steps at [Zoom Video SDK: Get Credentials](https://developers.zoom.us/docs/video-sdk/get-credentials/#get-video-sdk-credentials).
    You MUST use a different email address from your regular Zoom account email account.*
    
    *Easy workaround: if your email is name@company.com, your Zoom Video Developer email could follow the syntax name+text@company.com. Zoom sees it as two different email addresses, but emails to both email addresses are routed to name@company.com.*  

    *Example: email is alice@gmail.com, Zoom developer email is alice+zoom@gmail.com. The initial email address alice@gmail.com receives all emails sent to both.*


4. **Run the app**:
   ```bash
   npm run dev
   ```

5. **Access the app**:  
   The app will be available at `http://localhost:3000/`. Users can join video sessions via dynamic routes with the path being the name of the tutoring session.

## Key Code Components

- **JWT Generation**: The server generates JWTs using the Zoom SDK key and secret for secure session authentication.
- **Dynamic Routing**: Each session is dynamically created based on user input and routed to `/call/<session_name>`.
- **Video Component**: The `Videocall` component handles rendering of video and audio, using the Zoom Video SDK.

## Future Enhancements

- Add chat functionality for real-time communication during tutoring sessions.
- Implement screen sharing for more interactive learning experiences.
- Enhance security with user-specific authentication for session access.

