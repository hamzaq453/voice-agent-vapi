import Vapi from '@vapi-ai/web';

// Initialize Vapi client with API key from environment variables
const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY || '');

export const startCall = async () => {
  try {
    // Create a new call using the Vapi SDK
    // Pass the assistant ID directly as a string
    const call = await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '');
    return call;
  } catch (error) {
    console.error('Error starting call:', error);
    throw error;
  }
};

export const endCall = async () => {
  try {
    // End the call using the Vapi SDK
    await vapi.stop();
  } catch (error) {
    console.error('Error ending call:', error);
    throw error;
  }
}; 