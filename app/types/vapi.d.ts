declare module '@vapi-ai/web' {
  interface AssistantConfig {
    transcriber?: {
      provider: string;
      model: string;
      language?: string;
    };
    model?: {
      provider: string;
      model: string;
      messages?: Array<{
        role: string;
        content: string;
      }>;
    };
    voice?: {
      provider: string;
      voiceId: string;
    };
    name?: string;
    firstMessage?: string;
    recordingEnabled?: boolean;
  }

  interface AssistantOverrides {
    name?: string;
    firstMessage?: string;
    recordingEnabled?: boolean;
    [key: string]: unknown;
  }

  interface StartResponse {
    success: boolean;
    error?: string;
    sessionId?: string;
  }

  export default class Vapi {
    constructor(apiKey: string);
    start(assistantIdOrConfig: string | AssistantConfig, assistantOverrides?: AssistantOverrides): Promise<StartResponse>;
    stop(): Promise<void>;
    send(message: { type: string; message: { role: string; content: string } }): Promise<void>;
    isMuted(): boolean;
    setMuted(muted: boolean): void;
    say(message: string, endCallAfterSpoken?: boolean): Promise<void>;
  }
} 